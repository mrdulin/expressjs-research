import AWS from 'aws-sdk';

const config = {
  key: 'key',
  secret: 'secret',
  region: 'region',
};

export const func1 = (accessKeyId, secretAccessKeyID, region, queue, body) =>
  new AWS.SQS({ accessKeyId, secretAccessKey: secretAccessKeyID, region })
    .sendMessage({ QueueUrl: queue, MessageBody: body })
    .promise();

export const func2 = (queue, body) => exports.func1(config.key, config.secret, config.region, queue, body);
