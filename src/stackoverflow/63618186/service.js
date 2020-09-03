const path = require('path');
const { defaultLogger } = require('./logger');
const logger = defaultLogger.child({ filename: path.basename(__filename) });

const logResponse = () => {
  return logger.info('successful');
};

module.exports = {
  logResponse,
};
