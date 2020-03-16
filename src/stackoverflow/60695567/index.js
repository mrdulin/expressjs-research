const ssm = require('./aws-client');

const getSecret = async (secretName) => {
  // eslint-disable-next-line no-console
  console.log(`Getting secret for ${secretName}`);
  const params = {
    Name: secretName,
    WithDecryption: true,
  };

  const result = await ssm.getParameter(params).promise();
  return result.Parameter.Value;
};

module.exports = { getSecret };
