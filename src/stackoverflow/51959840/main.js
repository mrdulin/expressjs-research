const AWS = require('aws-sdk');
const s3 = new AWS.S3();

exports.execute = async function (curr_id) {
  const BUCKET_NAME = 'examplebucket';
  const KEY_PATH = 'SampleFile.txt';
  let params = { Bucket: BUCKET_NAME, Key: KEY_PATH };
  let fileObject = await s3.getObject(params).promise();
  let codeId = executeCode(fileObject).id;
  if (codeId !== curr_id) {
    throw 'Id from executed code does not match currentId: ' + curr_id;
  }
};

function executeCode(file) {
  return file;
}
