const conns = require('./connection');
const sinon = require('sinon');
const mysql2 = require('mysql2/promise');

describe('64255673', () => {
  it('should test transaction function in Connection', async () => {
    const results = { affectedRows: 1 };
    const connectionStub = {
      beginTransaction: sinon.stub(),
      commit: sinon.stub(),
      rollback: sinon.stub(),
      release: sinon.stub(),
    };
    const poolStub = {
      getConnection: sinon.stub().returns(connectionStub),
      query: sinon.stub().returns(results),
    };
    const createPoolStub = sinon.stub(mysql2, 'createPool').returns(poolStub);

    const conn = new conns.Connection();
    conn.createPool();
    const callback = sinon.stub();
    await conn.transaction(callback);

    sinon.assert.calledOnce(createPoolStub);
    sinon.assert.calledOnce(poolStub.getConnection);
    sinon.assert.calledOnce(connectionStub.beginTransaction);
    sinon.assert.calledOnceWithExactly(callback, connectionStub);
    sinon.assert.calledOnce(connectionStub.commit);
    sinon.assert.calledOnce(connectionStub.release);
  });
});
