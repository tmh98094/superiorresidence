const fs = require('fs');
const path = require('path');

const OPTIMIZED_DIR = './public/images-optimized';
const TARGET_DIR = './public/images';
const BACKUP_DIR = './public/images-backup';

async function main() {
  console.log('🔄 Replacing images with optimized versions\n');
  
  // Create backup directory
  if (!fs.existsSync(BACKUP_DIR)) {
    fs.mkdirSync(BACKUP_DIR, { recursive: true });
  }
  
  // Get optimized files
  const files = fs.readdirSync(OPTIMIZED_DIR);
  
  for (const file of files) {
    const sourcePath = path.join(OPTIMIZED_DIR, file);
    const targetPath = path.join(TARGET_DIR, file);
    const backupPath = path.join(BACKUP_DIR, file);
    
    // Backup original if exists
    if (fs.existsSync(targetPath)) {
      fs.copyFileSync(targetPath, backupPath);
    }
    
    // Copy optimized file
    fs.copyFileSync(sourcePath, targetPath);
    console.log(`✓ Replaced: ${file}`);
  }
  
  console.log('\n✅ Done! Original images backed up to:', BACKUP_DIR);
  console.log('\nIf you need to revert, copy files from', BACKUP_DIR, 'back to', TARGET_DIR);
}

main().catch(console.error);
