const { getCompany } = require('./helper');

module.exports = class Handler {
  async init() {
    await getCompany();
  }
};
