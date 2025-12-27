const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');
const distDir = path.join(__dirname, 'dist');

// Ensure dist exists
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Read files
const template = fs.readFileSync(path.join(srcDir, 'template.html'), 'utf8');
const csv = fs.readFileSync(path.join(srcDir, 'terms.csv'), 'utf8');

// Inject CSV into template
const output = template.replace('__CSV_DATA__', csv.trim());

// Write output
fs.writeFileSync(path.join(distDir, 'index.html'), output);

console.log(`✓ Built dist/index.html (${csv.split('\n').length - 1} terms)`);
