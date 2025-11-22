const fs = require('fs');

console.log('1. Starting async read...');
fs.readFile('myfile.txt', 'utf8', (err, data) => {
  if (err) {
    console.log('2. Error reading file:', err.message);
    return;
  }
  console.log('2. File contents:', data);
});

console.log('3. Done starting read operation');
