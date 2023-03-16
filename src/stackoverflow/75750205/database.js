const AWS = require('aws-sdk');

class Database {
  constructor() {
    this.dynamdbClient = new AWS.DynamoDB.DocumentClient();
  }

  async getRecordDetails(record) {
    const param = {
      TableName: 'a',
      Key: {
        uuid: record.uuid,
      },
    };
    return docClient.get(params).promise();
  }
}

module.exports = Database;
