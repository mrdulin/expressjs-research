const { Conn } = require('./Conn');
const sinon = require('sinon');
const mysql = require('mysql2/promise');

describe('64112250', () => {
  afterEach(() => {
    sinon.restore();
  });
  it('should test conn.executeQuery', async () => {
    const poolStub = {
      getConnection: sinon.stub().returnsThis(),
      query: sinon.stub().returnsThis(),
      release: sinon.stub(),
    };
    const createPoolStub = sinon.stub(mysql, 'createPool').returns(poolStub);
    const conn = new Conn();
    await conn.setConnection();
    await conn.executeQuery();
    sinon.assert.calledOnce(createPoolStub);
    sinon.assert.calledOnce(poolStub.getConnection);
    sinon.assert.calledWithExactly(poolStub.query, 'select 1 + 1 as solution');
    sinon.assert.calledOnce(poolStub.release);
  });
});
