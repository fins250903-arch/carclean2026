import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUBLIC_DIR = path.join(__dirname, '../public/images');

const imagesToOptimize = [
    { src: 'fv.png', dest: 'fv.webp', width: 1200 },
    { src: 'profile_imamura.jpg.JPG', dest: 'profile_imamura.webp', width: 800 },
    { src: 'representative_new.jpg', dest: 'representative_new.webp', width: 800 },
    { src: 'empathy.png', dest: 'empathy.webp', width: 800 },
    { src: 'steam.png', dest: 'steam.webp', width: 800 },
    { src: 'rinser.png', dest: 'rinser.webp', width: 800 },
    { src: 'coffee_stain.png', dest: 'coffee_stain.webp', width: 800 },
    { src: 'voice_businessman.png', dest: 'voice_businessman.webp', width: 600 },
    { src: 'voice_family.png', dest: 'voice_family.webp', width: 600 },
    { src: 'voice_young_man.png', dest: 'voice_young_man.webp', width: 600 },
];

async function optimize() {
    console.log('Starting image optimization...');

    for (const img of imagesToOptimize) {
        const srcPath = path.join(PUBLIC_DIR, img.src);
        const destPath = path.join(PUBLIC_DIR, img.dest);

        if (!fs.existsSync(srcPath)) {
            console.warn(`Warning: Source file not found: ${img.src}`);
            continue;
        }

        try {
            await sharp(srcPath)
                .resize(img.width, null, { withoutEnlargement: true })
                .webp({ quality: 80 })
                .toFile(destPath);

            console.log(`Optimized: ${img.src} -> ${img.dest}`);
        } catch (error) {
            console.error(`Error processing ${img.src}:`, error);
        }
    }

    console.log('Image optimization complete!');
}

optimize();
