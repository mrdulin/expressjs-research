const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const proxyquire = require('proxyquire');
const sinon = require('sinon');
const SomeExtendedErrrorClass = require('./SomeExtendedErrrorClass');

chai.use(chaiAsPromised);
const { expect } = chai;

describe('68640048', () => {
  it('should get and send response data', async () => {
    const someReturnFunctionStub = sinon.stub().resolves('teresa teng');

    const { someMiddleware } = proxyquire('./someMiddleware', {
      './someReturnFunction': someReturnFunctionStub,
    });
    const mReq = {};
    const mRes = { send: sinon.stub() };
    await someMiddleware(mReq, mRes);
    sinon.assert.calledWithExactly(mRes.send, 'teresa teng');
  });

  it('should throw error', async () => {
    const someReturnFunctionStub = sinon.stub().resolves(null);
    const { someMiddleware } = proxyquire('./someMiddleware', {
      './someReturnFunction': someReturnFunctionStub,
    });

    const mReq = {};
    const mRes = { send: sinon.stub() };
    await expect(someMiddleware(mReq, mRes)).to.eventually.rejectedWith(SomeExtendedErrrorClass);
  });
});
