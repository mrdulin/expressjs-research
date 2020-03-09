const logger = {
  debug: console.log,
  error: console.error,
  verbose: console.log,
};

const queMessage = async function(channel, queue, msg, opts = { persistent: true }) {
  return new Promise(function(resolve, reject) {
    logger.debug('Queuing message on %s queue. %o, %o', queue, msg, opts);
    channel.sendToQueue(queue, Buffer.from(msg), opts, (err, ok) => {
      if (err) {
        logger.error('Error pushing message to %s queue. %o', queue, err);
        reject(err);
      } else {
        logger.verbose('Pushed message to %s queue successfully.', queue);
        resolve();
      }
    });
  });
};

export { queMessage, logger };
