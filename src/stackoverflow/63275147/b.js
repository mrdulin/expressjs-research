const c = require('./c');

function getInfo() {
  return getDetailInfo();
}

function getDetailInfo() {
  const result = c.getApiResult();
  return result;
}

module.exports = { getInfo };
