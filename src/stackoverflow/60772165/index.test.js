const { pushToQueue } = require('.');
const sinon = require('sinon');
const { ServiceBusClient } = require('@azure/service-bus');

describe('60772165', () => {
  it('should push to queue', async () => {
    const sbClientStub = {
      createQueueClient: sinon.stub().returnsThis(),
      createSender: sinon.stub().returnsThis(),
      send: sinon.stub(),
      close: sinon.stub(),
    };
    sinon.stub(ServiceBusClient, 'createFromConnectionString').callsFake(() => sbClientStub);
    const messages = ['a', 'b'];
    const ctx = {};
    const actual = await pushToQueue(messages, ctx);
    sinon.assert.match(actual, 2);
    sinon.assert.calledWithExactly(ServiceBusClient.createFromConnectionString, undefined);
    sinon.assert.calledWithExactly(sbClientStub.createQueueClient, undefined);
    sinon.assert.calledOnce(sbClientStub.createSender);
    sinon.assert.calledWithExactly(sbClientStub.send.firstCall, { body: 'a' });
    sinon.assert.calledWithExactly(sbClientStub.send.secondCall, { body: 'b' });
    sinon.assert.calledTwice(sbClientStub.close);
  });
});
