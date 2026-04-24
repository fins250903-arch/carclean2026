const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const artifactsDir = 'c:/Users/yu2/.gemini/antigravity/brain/9c592e48-a8e2-4673-93bf-fd65826d5af2';
const targetDir = path.resolve(__dirname, '../public/images/cases');

if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
}

// Filter for the new batch of images (timestamp 1770216802611)
const files = fs.readdirSync(artifactsDir).filter(f => f.includes('1770216802611') && (f.endsWith('.jpg') || f.endsWith('.png')));

console.log(`Found ${files.length} N-BOX images to process.`);

async function processImages() {
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const inputPath = path.join(artifactsDir, file);
        const outputFilename = `nbox_odor_${i + 1}.webp`;
        const outputPath = path.join(targetDir, outputFilename);

        try {
            await sharp(inputPath)
                .resize(800, 600, {
                    fit: 'cover',
                    position: 'center'
                })
                .webp({ quality: 80 })
                .toFile(outputPath);

            console.log(`Processed ${file} -> ${outputFilename}`);
        } catch (err) {
            console.error(`Error processing ${file}:`, err);
        }
    }
}

processImages();
