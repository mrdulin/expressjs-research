import sinon from 'sinon';
import rewire from 'rewire';

describe('61274112', () => {
  it('should pass', async () => {
    const greatRoute = rewire('./');
    const secretStringStub = sinon.stub().resolves('fake secret');
    greatRoute.__set__('_secretString', secretStringStub);
    const logSpy = sinon.spy(console, 'log');
    const mReq = { params: { secret: '123' } };
    const mRes = {};
    await greatRoute.default.route(mReq, mRes);
    sinon.assert.calledWithExactly(logSpy, 'fake secret');
    sinon.assert.calledWith(secretStringStub, '123');
  });
});
