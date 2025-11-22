const path = require('path');

const filePath = '/Users/uvs/js/server.js';

console.log('Directory:', path.dirname(filePath));
console.log('File name:', path.basename(filePath));
console.log('Extension:', path.extname(filePath));
console.log('Join example:', path.join(__dirname, 'data', 'notes.txt'));
