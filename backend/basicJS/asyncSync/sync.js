const fs = require('fs');

console.log('1. Starting sync read...');
try {
  const data = fs.readFileSync('myfile.txt', 'utf8');
  console.log('2. File contents:', data);
} catch (err) {
  console.log('2. Error reading file:', err.message);
}
console.log('3. Done reading file');