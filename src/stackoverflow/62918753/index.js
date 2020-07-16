const AWS = require('aws-sdk');
const sts = new AWS.STS();

module.exports.assumeRole = async (roleArn) => {
  let params = {
    RoleArn: roleArn,
    RoleSessionName: 'MessagingSession',
  };

  return await sts.assumeRole(params).promise();
};
