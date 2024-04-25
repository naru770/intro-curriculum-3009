'use strict';
const fs = require('node:fs');

function cat(fileName) {
  fs.readFile(fileName, 'utf8', (err, data) => {
    console.log(data);
  });
}

cat(process.argv[2]);