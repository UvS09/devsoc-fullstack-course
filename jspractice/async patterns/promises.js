const fs = require('fs/promises');

fs.readFile('myfile.txt', 'utf8')
  .then(data => {
    console.log('File contents:', data);
  })
  .catch(err => {
    console.log('Error:', err.message);
  })
  .finally(() => {
    console.log('Done!');
  });



