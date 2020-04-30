const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-west-2' });
const dynamodb = new AWS.DynamoDB.DocumentClient();
const lambda = new AWS.Lambda();

exports.handler = async (event) => {
  let result = await dynamodb.get({}).promise();
  await lambda.invoke({}).promise();

  return { status: 'ok' };
};
