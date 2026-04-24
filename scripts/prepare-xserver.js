const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const projectRoot = path.join(__dirname, '..');
const outDir = path.join(projectRoot, 'out');
const archiveDir = path.join(projectRoot, 'deploy');
const archivePath = path.join(archiveDir, 'xserver-deploy.zip');
const htaccessPath = path.join(outDir, '.htaccess');

const htaccess = String.raw`DirectoryIndex index.html index.php
Options -Indexes

<IfModule mod_rewrite.c>
RewriteEngine On
RewriteRule ^blog(/.*)?$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.+[^/])$ /$1/ [R=301,L]
</IfModule>

<IfModule mod_deflate.c>
AddOutputFilterByType DEFLATE text/plain text/html text/css text/javascript application/javascript application/json application/xml image/svg+xml
</IfModule>

<IfModule mod_expires.c>
ExpiresActive On
ExpiresByType text/html "access plus 0 seconds"
ExpiresByType text/plain "access plus 0 seconds"
ExpiresByType text/css "access plus 1 month"
ExpiresByType application/javascript "access plus 1 month"
ExpiresByType text/javascript "access plus 1 month"
ExpiresByType application/json "access plus 1 day"
ExpiresByType image/jpeg "access plus 1 year"
ExpiresByType image/png "access plus 1 year"
ExpiresByType image/webp "access plus 1 year"
ExpiresByType image/avif "access plus 1 year"
ExpiresByType image/svg+xml "access plus 1 month"
ExpiresByType font/woff2 "access plus 1 year"
</IfModule>

<IfModule mod_headers.c>
<FilesMatch "\.(css|js|mjs|jpg|jpeg|png|webp|avif|svg|woff2)$">
Header set Cache-Control "public, max-age=31536000, immutable"
</FilesMatch>
<FilesMatch "\.(html|xml|txt)$">
Header set Cache-Control "public, max-age=0, must-revalidate"
</FilesMatch>
Header always set X-Content-Type-Options "nosniff"
Header always set Referrer-Policy "strict-origin-when-cross-origin"
</IfModule>

<FilesMatch "^\.ht">
Require all denied
</FilesMatch>
`;

if (!fs.existsSync(outDir)) {
  console.error('out directory was not found. Run the build first.');
  process.exit(1);
}

fs.writeFileSync(htaccessPath, `${htaccess}\n`, 'utf8');
console.log(`Created ${path.relative(projectRoot, htaccessPath)}`);

fs.mkdirSync(archiveDir, { recursive: true });

if (fs.existsSync(archivePath)) {
  fs.rmSync(archivePath, { force: true });
}

try {
  execFileSync(
    'powershell.exe',
    [
      '-NoProfile',
      '-Command',
      `Compress-Archive -Path '${outDir}${path.sep}*' -DestinationPath '${archivePath}' -Force`,
    ],
    { stdio: 'inherit' }
  );
  console.log(`Created ${path.relative(projectRoot, archivePath)}`);
} catch (error) {
  console.error('Failed to create deploy archive.', error.message);
  process.exit(1);
}