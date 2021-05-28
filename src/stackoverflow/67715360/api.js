const fetch = require('node-fetch');

const getPeople = (url) => {
  console.log(`About to call API at ${url}`);
  return new Promise((resolve, reject) => {
    fetch(url, { method: 'GET' })
      .then((res) => Promise.all([res.status, res.json()]))
      .then(([status, jsonData]) => {
        resolve([status, jsonData]);
      })
      .catch((error) => {
        console.log('e', error);
        reject(error);
      });
  });
};

module.exports = { getPeople };
