const fs = require('fs/promises');

async function showFile() {
  try {
    console.log('Reading file...');
    const data = await fs.readFile('myfile.txt', 'utf8');
    console.log('File contents:', data);
  } catch (err) {
    console.log('Error:', err.message);
  } finally {
    console.log('Done!');
  }
}

showFile();
