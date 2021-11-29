const { EventHubProducerClient } = require('@azure/event-hubs');

const connectionString = 'EVENT HUBS NAMESPACE CONNECTION STRING';
const eventHubName = 'EVENT HUB NAME';

const produce = async (req, res, data) => {
  try {
    const producer = new EventHubProducerClient(connectionString, eventHubName);
    const batch = await producer.createBatch();
    batch.tryAdd({ body: 'First event' });
    batch.tryAdd({ body: 'Second event' });
    batch.tryAdd({ body: 'Third event' });
    await producer.sendBatch(batch);
    await producer.close();
    console.log('A batch of three events have been sent to the event hub');
  } catch (error) {
    throw e;
  }
};

module.exports = { produce };
