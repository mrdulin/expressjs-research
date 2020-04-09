const redis = require('redis');

const logger = {
  log: console.log,
};

const client = redis.createClient({
  retry_strategy: function(options) {
    if (options.error) {
      if (options.error.code === 'ECONNREFUSED') {
        logger.log('redis', 'The server refused the connection', 'error');
        return new Error('The server refused the connection');
      }
      if (options.error.code === 'ECONNRESET') {
        logger.log('redis', 'The server reset the connection', 'error');
        return new Error('The server reset the connection');
      }
      if (options.error.code === 'ETIMEDOUT') {
        logger.log('redis', 'The server timeouted the connection', 'error');
        return new Error('The server timeouted the connection');
      }
    }
    if (options.total_retry_time > 1000 * 60 * 60) {
      logger.log('redis', 'Retry time exhausted', 'error');
      return new Error('Retry time exhausted');
    }
    if (options.attempt > 10) {
      logger.log('redis', 'Retry attempt exceed', 'error');
      return undefined;
    }
    return Math.min(options.attempt * 100, 3000);
  },
});

module.exports = client;
