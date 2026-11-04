const fs = require('fs');
const path = require('path');

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  // replace ₹ with €
  content = content.replace(/₹/g, '€');
  // replace " Cr" with " M" (and "Cr" with "M" in some places if needed, but let's just do " Cr" -> " M" and "Cr" -> "M" carefully)
  // Let's replace " Cr" with " M"
  content = content.replace(/ Cr/g, ' M');
  content = content.replace(/120\.00 Cr/g, '2000 M');
  content = content.replace(/120\.00/g, '2000.00');
  fs.writeFileSync(filePath, content);
}

const walkSync = (dir) => {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walkSync(filePath));
    } else { 
      if (filePath.endsWith('.tsx')) {
        results.push(filePath);
      }
    }
  });
  return results;
};

const files = walkSync('src');
files.forEach(file => replaceInFile(file));
console.log('Replaced currency symbols in all tsx files.');
