const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function flipImage() {
    const inputPath = path.join(__dirname, '..', 'public', 'images', 'truck-cabin-dirty.png');
    const outputPath = path.join(__dirname, '..', 'public', 'images', 'truck-cabin-dirty-temp.png');

    try {
        await sharp(inputPath)
            .flop() // horizontally flip
            .toFile(outputPath);
        
        fs.renameSync(outputPath, inputPath);
        console.log('Successfully flipped truck-cabin-dirty.png horizontally.');
    } catch (err) {
        console.error('Error flipping image:', err);
        process.exit(1);
    }
}

flipImage();
