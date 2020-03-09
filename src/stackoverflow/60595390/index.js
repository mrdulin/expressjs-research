const AdmZip = require('adm-zip');

async function main() {
  const filePath = 'some file path';
  const outputPath = './dist';
  const zip = new AdmZip(filePath);
  const response = await zip.extractAllTo(outputPath, true);
}

module.exports = main;
