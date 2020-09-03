const pino = require('pino');

const defaultLogger = pino({}, 'output.log');

module.exports = {
  defaultLogger,
};
