import sinon from 'sinon';
import proxyquire from 'proxyquire';

describe('60172091', () => {
  it('should valdiate', async () => {
    const pgClientStub = {
      connect: sinon.stub().returnsThis(),
      query: sinon.stub().resolves('asdf'),
    };
    const pgStub = sinon.stub().callsFake(() => pgClientStub);
    const MyClass = proxyquire('./index', {
      pg: { Client: pgStub },
    }).default;
    const logSpy = sinon.spy(console, 'log');
    const instance = new MyClass();
    await instance.validate();
    sinon.assert.calledOnce(pgStub);
    sinon.assert.calledOnce(pgClientStub.connect);
    sinon.assert.calledWithExactly(pgClientStub.query, `SELECT * FROM "user" WHERE "user_id" = '1'`);
    sinon.assert.calledWithExactly(logSpy, 'asdf');
  });
});
