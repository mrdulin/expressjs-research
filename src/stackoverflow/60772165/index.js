async function pushToQueue(messages, ctx) {
  context = ctx;
  const { ServiceBusClient } = require('@azure/service-bus');
  const connectionString = process.env['serviceBusConnectionString'];
  const queueName = process.env['serviceBusQueueName'];

  const sbClient = ServiceBusClient.createFromConnectionString(connectionString);
  const queueClient = sbClient.createQueueClient(queueName);
  const sender = queueClient.createSender();

  try {
    for (let i = 0; i < messages.length; i++) {
      const message = {
        body: messages[i],
      };
      await sender.send(message);
    }
    await queueClient.close();
  } finally {
    await sbClient.close();
  }
  return messages.length;
}

module.exports = { pushToQueue };
