const AWS = require('aws-sdk');

exports.getCredsFromAWSSecretsManager = () => {
  const SM = new AWS.SecretsManager({
    apiVersion: process.env.AWS_SM_API_VERSION,
    region: process.env.AWS_SM_REGION,
  });
  const params = {
    SecretId: '1',
  };

  return SM.getSecretValue(params)
    .promise()
    .then((data) => {
      console.info(data);
      return JSON.parse(data.SecretString);
    })
    .catch((err) => {
      console.error(err);
      throw err;
    });
};
