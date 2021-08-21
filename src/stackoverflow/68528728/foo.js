var request = require('request');

module.exports.getRequest = function (url, headers) {
  return new Promise((resolve, reject) => {
    request(
      {
        url: url,
        method: 'GET',
        timeout: 30000,
        headers: headers,
      },
      function (error, response, body) {
        if (error) {
          reject(error);
        }
        resolve({ response, body });
      },
    );
  });
};
