const sinon = require('sinon');
const proxyquire = require('proxyquire');

describe('60206259', () => {
  it('should pass', () => {
    const mRes = { status: sinon.stub().returnsThis(), json: sinon.stub() };
    const mError = new Error('network');
    mError.status = 500;
    const appStub = { use: sinon.stub().callsFake((mw) => mw(mError, {}, mRes)) };
    const expressStub = sinon.stub().callsFake(() => appStub);
    const createServer = proxyquire('./', {
      express: expressStub,
    });

    createServer();
    sinon.assert.calledOnce(expressStub);
    sinon.assert.calledWithExactly(appStub.use, sinon.match.func);
    sinon.assert.calledWithExactly(mRes.status, 500);
    sinon.assert.calledWithExactly(mRes.status().json, mError);
  });
});
