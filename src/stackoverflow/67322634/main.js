const AWS = require('aws-sdk');
const secretsManager = new AWS.SecretsManager();

module.exports = async (keyId) => {
  return getSecret(keyId)
    .then((secret) => {
      const username = secret.publicKey;
      const password = secret.privateKey;
      return { username, password };
    })
    .catch((err) => {
      console.error(err);
    });
};

const getSecret = (keyId) => {
  return new Promise((resolve, reject) => {
    secretsManager.getSecretValue(
      {
        SecretId: keyId,
      },
      (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(JSON.parse(data.SecretString));
        }
      },
    );
  });
};
