const index = require('./handler');
const conns = require('./connection');
const { expect } = require('chai');
const sinon = require('sinon');

const mocks = {
  baseMessage: {
    Records: [],
  },
};

describe('64310254', () => {
  it('Should test handler without mocking', async () => {
    const poolConnectionStub = {
      query: sinon.stub(),
    };
    const connectionStub = {
      createPool: sinon.stub(),
      transaction: sinon.stub().callsFake(async (callback) => {
        await callback(poolConnectionStub);
      }),
    };
    const ConnectionStub = sinon.stub(conns, 'Connection').returns(connectionStub);

    const response = await index.handler(mocks.baseMessage, null);
    expect(response.statusCode).to.be.eq(200);
    sinon.assert.calledOnceWithExactly(ConnectionStub, {});
    sinon.assert.calledOnce(connectionStub.createPool);
    sinon.assert.calledOnceWithExactly(connectionStub.transaction, sinon.match.func);
    sinon.assert.calledThrice(poolConnectionStub.query);
    ConnectionStub.restore();
  });

  it('should handle error', async () => {
    const poolConnectionStub = {
      query: sinon.stub(),
    };
    const connectionStub = {
      createPool: sinon.stub(),
      transaction: sinon.stub().rejects(new Error('timeout')),
    };
    const ConnectionStub = sinon.stub(conns, 'Connection').returns(connectionStub);

    const response = await index.handler(mocks.baseMessage, null);
    expect(response.statusCode).to.be.eq(400);
    sinon.assert.calledOnceWithExactly(ConnectionStub, {});
    sinon.assert.calledOnce(connectionStub.createPool);
    sinon.assert.calledOnceWithExactly(connectionStub.transaction, sinon.match.func);
    sinon.assert.notCalled(poolConnectionStub.query);
    ConnectionStub.restore();
  });
});
