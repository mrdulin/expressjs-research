const phin = require('phin');

async function request(req) {
  return await phin(req);
}

module.exports = { request };
