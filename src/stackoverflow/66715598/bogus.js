const AWS = require('aws-sdk');
const SQS = new AWS.SQS();

exports.handler = () => {
  return SQS.deleteMessage({ foo: 'bar' }).promise();
};
