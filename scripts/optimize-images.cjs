const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const INPUT_DIR = './public/images';
const OUTPUT_DIR = './public/images-optimized';

// Image size configurations
const SIZES = {
  hero: { width: 1920, quality: 85 },      // Hero/background images
  gallery: { width: 1400, quality: 85 },   // Gallery images
  card: { width: 800, quality: 85 },       // Card images
  logo: { width: 400, quality: 90 },       // Logos
  icon: { width: 200, quality: 90 },       // Icons/favicons
};

// Map filenames to their appropriate size config
function getSizeConfig(filename) {
  const lower = filename.toLowerCase();
  if (lower.includes('hero') || lower.includes('concept') || lower.includes('features') || lower.includes('master')) {
    return SIZES.hero;
  }
  if (lower.includes('gallery') || lower.includes('lifestyle') || lower.includes('hotspring') || lower.includes('clubhouse') || lower.includes('lounge') || lower.includes('library') || lower.includes('location')) {
    return SIZES.gallery;
  }
  if (lower.includes('card') || lower.includes('service') || lower.includes('butler') || lower.includes('chef') || lower.includes('chauffer')) {
    return SIZES.card;
  }
  if (lower.includes('logo') || lower.includes('icon') || lower.includes('try')) {
    return SIZES.logo;
  }
  if (lower.includes('favicon')) {
    return SIZES.icon;
  }
  return SIZES.gallery; // Default
}

async function optimizeImage(inputPath, outputPath, config) {
  const ext = path.extname(inputPath).toLowerCase();
  const baseName = path.basename(inputPath, ext);
  
  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    
    // Only resize if image is larger than target
    const shouldResize = metadata.width > config.width;
    
    let pipeline = image;
    if (shouldResize) {
      pipeline = pipeline.resize(config.width, null, {
        withoutEnlargement: true,
        fit: 'inside'
      });
    }

    // Convert to WebP
    const webpPath = path.join(outputPath, `${baseName}.webp`);
    await pipeline.clone().webp({ quality: config.quality }).toFile(webpPath);
    
    // Also create optimized original format as fallback
    const fallbackPath = path.join(outputPath, `${baseName}${ext}`);
    if (ext === '.png') {
      await pipeline.clone().png({ quality: config.quality, compressionLevel: 9 }).toFile(fallbackPath);
    } else if (ext === '.jpg' || ext === '.jpeg') {
      await pipeline.clone().jpeg({ quality: config.quality, mozjpeg: true }).toFile(fallbackPath);
    }
    
    // Get file sizes for comparison
    const originalSize = fs.statSync(inputPath).size;
    const webpSize = fs.statSync(webpPath).size;
    const savings = ((1 - webpSize / originalSize) * 100).toFixed(1);
    
    console.log(`✓ ${path.basename(inputPath)}: ${(originalSize/1024/1024).toFixed(2)}MB → ${(webpSize/1024/1024).toFixed(2)}MB (${savings}% smaller)`);
    
    return { original: originalSize, optimized: webpSize };
  } catch (error) {
    console.error(`✗ Error processing ${inputPath}:`, error.message);
    return { original: 0, optimized: 0 };
  }
}

async function main() {
  console.log('🖼️  Image Optimization Script\n');
  
  // Create output directory
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }
  
  // Get all images
  const files = fs.readdirSync(INPUT_DIR).filter(f => 
    /\.(png|jpg|jpeg)$/i.test(f)
  );
  
  console.log(`Found ${files.length} images to optimize\n`);
  
  let totalOriginal = 0;
  let totalOptimized = 0;
  
  for (const file of files) {
    const inputPath = path.join(INPUT_DIR, file);
    const config = getSizeConfig(file);
    const result = await optimizeImage(inputPath, OUTPUT_DIR, config);
    totalOriginal += result.original;
    totalOptimized += result.optimized;
  }
  
  console.log('\n📊 Summary:');
  console.log(`   Original total: ${(totalOriginal/1024/1024).toFixed(2)}MB`);
  console.log(`   Optimized total: ${(totalOptimized/1024/1024).toFixed(2)}MB`);
  console.log(`   Total savings: ${((1 - totalOptimized/totalOriginal) * 100).toFixed(1)}%`);
  console.log('\n✅ Optimized images saved to:', OUTPUT_DIR);
  console.log('\nNext steps:');
  console.log('1. Review the optimized images in', OUTPUT_DIR);
  console.log('2. If satisfied, run: npm run replace-images');
}

main().catch(console.error);
