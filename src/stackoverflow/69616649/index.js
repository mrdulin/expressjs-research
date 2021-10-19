const fs = require('fs');
const util = require('util');
const unzipper = require('unzipper');

const unZip = async (zipFilePath, destDir) => {
  await util.promisify(fs.mkdir)(destDir);

  return new Promise((resolve, reject) => {
    fs.createReadStream(zipFilePath)
      .pipe(unzipper.Extract({ path: destDir }))
      .on('close', () => resolve(destDir))
      .on('error', (err) => {
        console.log('Error inside unzip', err);
        reject(err);
      });
  });
};

module.exports = unZip;
