const AWS = require('aws-sdk');

async function getItem() {
  const dynamo = new AWS.DynamoDB.DocumentClient();
  var params = {
    /* irrelevant */
  };

  try {
    return await dynamo.get(params).promise();
  } catch (err) {
    return err;
  }
}

exports.getItem = getItem;
