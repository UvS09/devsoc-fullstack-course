//simple callback
const fs = require('fs');

fs.readFile('myfile.txt', 'utf8', (err, data) => {
  if (err) return console.error(err);
  console.log(data);
});



fs.readFile('a.txt', (err, dataA) => {
  fs.readFile('b.txt', (err, dataB) => {
    fs.readFile('c.txt', (err, dataC) => {
      console.log(dataA, dataB, dataC);
    });
  });
});
