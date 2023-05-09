var fs = require('fs');

fs.appendFile('Welcome.txt', 'Hello node!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});