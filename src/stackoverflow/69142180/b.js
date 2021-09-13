const { RMQ_INSTANCE } = require('./a');

module.exports.publishEmail = async function (message) {
  var connection = await RMQ_INSTANCE.getInstance();
  var channel = await connection.createChannel();
  var exchange = 'some_exchange';
  var key = 'some_key';
  var msg = JSON.stringify(message);
  await channel.assertExchange(exchange, 'topic', { durable: false });
  await channel.publish(exchange, key, Buffer.from(msg));
  setTimeout(function () {
    connection.close();
  }, 500);
};
