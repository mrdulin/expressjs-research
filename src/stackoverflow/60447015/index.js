const AWS = require('aws-sdk');
const ssm = new AWS.SSM();

function getParamsFromParamterStore(query) {
  return ssm.getParametersByPath(query).promise();
}
