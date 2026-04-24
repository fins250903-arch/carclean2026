const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/data/regionalPosts.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Replace aiSummary content: match everything up to the first \n\n[ and drop the rest.
// Wait, the string is like `... \n\n[...`
// I can just split each aiSummary on '\n\n[' and keep the first part.

content = content.replace(/(aiSummary:\s*`)(.*?)`/gs, (match, prefix, inner) => {
    const parts = inner.split('\\n\\n[');
    return prefix + parts[0] + '`';
});

fs.writeFileSync(filePath, content);
console.log('Cleaned regionalPosts.ts aiSummary fields.');
