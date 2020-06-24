const controller = require('./controller');
const service = require('./service');
const sinon = require('sinon');

const flushPromises = () => new Promise(setImmediate);

describe('62536251', () => {
  afterEach(() => {
    sinon.restore();
  });
  it('should create', async () => {
    const mResult = 'success';
    sinon.stub(service, 'create').resolves(mResult);
    const mReq = { body: {} };
    const mReply = { code: sinon.stub().returnsThis(), send: sinon.stub() };
    controller.create(mReq, mReply);
    await flushPromises();
    sinon.assert.calledWith(mReply.code, 201);
    sinon.assert.calledWith(mReply.send, 'success');
  });

  it('should handle error', async () => {
    const mError = new Error('network');
    sinon.stub(service, 'create').rejects(mError);
    const mReq = { body: {} };
    const mReply = { code: sinon.stub().returnsThis(), send: sinon.stub() };
    controller.create(mReq, mReply);
    await flushPromises();
    sinon.assert.calledWith(mReply.send, mError);
  });
});
