const fs = require('fs');

const appPath = 'src/App.tsx';
let content = fs.readFileSync(appPath, 'utf8');

content = content.replace(/MOCK IPL 2027/g, 'MOCK FOOTBALL AUCTION');
content = content.replace(/IPL-style/g, 'Football-style');
content = content.replace(/official IPL auction/g, 'official football auction');

fs.writeFileSync(appPath, content);
console.log('Replaced IPL mentions in App.tsx');
