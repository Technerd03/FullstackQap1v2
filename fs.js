//The fs module provides file functionality for reading from and writing to files.
//Example:
const fs = require('fs');


// Write to a file asynchronously
fs.writeFile('message.txt', 'Hello Tech developers', (err) => {
  if (err) throw err;
  console.log('Data has been written to file');
});


// Read from a file asynchronously
fs.readFile('message.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log('File content:', data);
});