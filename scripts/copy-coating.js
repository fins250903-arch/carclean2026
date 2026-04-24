const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '../coating'); // Should contain fukuoka/index.html after my change
const destDir = path.join(__dirname, '../out/coating');

console.log('Copying coating LP directory to out...');

function copyRecursiveSync(src, dest) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();
  if (isDirectory) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    fs.readdirSync(src).forEach((childItemName) => {
      copyRecursiveSync(path.join(src, childItemName), path.join(dest, childItemName));
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}

try {
  // We'll clean the destination first if needed, but for now just copy
  copyRecursiveSync(srcDir, destDir);
  console.log('Success: Copied to ' + destDir);
} catch (err) {
  console.error('Error during copy:', err);
  process.exit(1);
}
