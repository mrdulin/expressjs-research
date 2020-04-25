const fs = require('fs');
const { promisify } = require('util');

const lstat = promisify(fs.lstat);

async function doSomething(someFilePath) {
  return await lstat(someFilePath);
}

module.exports = doSomething;
