const proxyquire = require('proxyquire');
const sinon = require('sinon');

describe('68808576', () => {
  it('should pass', async () => {
    const batchStub = {
      tryAdd: sinon.stub(),
    };
    const producerStub = {
      createBatch: sinon.stub().resolves(batchStub),
      sendBatch: sinon.stub(),
      close: sinon.stub(),
    };
    const EventHubProducerClientStub = sinon.stub().returns(producerStub);
    const main = proxyquire('./main', {
      '@azure/event-hubs': { EventHubProducerClient: EventHubProducerClientStub },
    });
    await main();
    sinon.assert.calledWithExactly(
      EventHubProducerClientStub,
      'EVENT HUBS NAMESPACE CONNECTION STRING',
      'EVENT HUB NAME',
    );
    sinon.assert.calledOnce(producerStub.createBatch);
    sinon.assert.calledThrice(batchStub.tryAdd);
    sinon.assert.calledWithExactly(producerStub.sendBatch, batchStub);
    sinon.assert.calledOnce(producerStub.close);
  });
});
