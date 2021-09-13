const sinon = require('sinon');
const { RMQ_INSTANCE } = require('./a');
const { publishEmail } = require('./b');

describe('test_producer', () => {
  let clock;
  before(() => {
    clock = sinon.useFakeTimers();
  });
  after(() => {
    clock.restore();
  });
  it('producer connection - success test', async () => {
    const channelStub = {
      assertExchange: sinon.stub().returnsThis(),
      publish: sinon.stub(),
    };
    const connectionStub = { createChannel: sinon.stub().resolves(channelStub), close: sinon.stub() };
    sinon.stub(RMQ_INSTANCE, 'getInstance').resolves(connectionStub);
    await publishEmail('fake message');
    sinon.assert.calledOnce(RMQ_INSTANCE.getInstance);
    sinon.assert.calledOnce(connectionStub.createChannel);
    sinon.assert.calledWithExactly(channelStub.assertExchange, 'some_exchange', 'topic', { durable: false });
    sinon.assert.calledWithExactly(
      channelStub.publish,
      'some_exchange',
      'some_key',
      Buffer.from(JSON.stringify('fake message')),
    );
    clock.tick(500);
    sinon.assert.calledOnce(connectionStub.close);
  });
});
