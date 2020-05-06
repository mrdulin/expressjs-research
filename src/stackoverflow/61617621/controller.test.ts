import { ConnectionDB } from './db';
import { Controller } from './controller';
import sinon from 'sinon';

describe('61617621', () => {
  it('should pass', async () => {
    const logSpy = sinon.spy(console, 'log');
    const json = { message: 'fake' };
    const executeSimpleQueryStub = sinon.stub(ConnectionDB, 'executeSimpleQuery').resolves(json);
    const mReq = { params: { testid: 1 } };
    const mRes = {};
    const mNext = {};
    await Controller.getTest(mReq, mRes, mNext);
    sinon.assert.calledWithExactly(executeSimpleQueryStub, 'SELECT * FROM TEST WHERE TEST_ID = :1', [1]);
    sinon.assert.calledWithExactly(logSpy, { message: 'fake' });
  });
});
