const fs = require('fs-extra');
const path = require('path');

const browserPath = path.join(__dirname, 'docs', 'browser');
const outputPath = path.join(__dirname, 'docs');

fs.copySync(browserPath, outputPath);

fs.removeSync(browserPath);

console.log('Build outputs combined into the docs folder');
