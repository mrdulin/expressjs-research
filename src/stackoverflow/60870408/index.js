const redis = require('redis');
const redisHostName = process.env['hostName'];
const redisPort = process.env['port'];
const redisKey = process.env['key'];

let client = redis.createClient(redisPort, redisHostName, { auth_pass: redisKey, tls: { serverName: redisHostName } });

async function getKeyValue(key, ctx) {
  context = ctx;
  return new Promise((resolve, reject) => {
    client.get(key, function(err, result) {
      if (err) {
        return resolve(err);
      }
      resolve(result);
    });
  });
}

exports.getKeyValue = getKeyValue;
