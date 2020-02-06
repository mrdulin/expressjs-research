const sinon = require('sinon');
const proxyquire = require('proxyquire');

describe('60084056', () => {
  it('should get response', () => {
    const error = null;
    const response = {};
    const customServerStub = sinon.stub().yields(error, response);
    const A = proxyquire('./a.js', {
      './customServer': customServerStub,
    });
    const a = new A();
    const port = 3000;
    const callback = sinon.stub();
    a.listenResponse(port, callback);
    sinon.assert.calledWithExactly(customServerStub, port, sinon.match.func);
    sinon.assert.calledWithExactly(callback, null, response);
  });

  it('should handle error', () => {
    const error = new Error('network');
    const response = {};
    const customServerStub = sinon.stub().yields(error, response);
    const A = proxyquire('./a.js', {
      './customServer': customServerStub,
    });
    const a = new A();
    const port = 3000;
    const callback = sinon.stub();
    a.listenResponse(port, callback);
    sinon.assert.calledWithExactly(customServerStub, port, sinon.match.func);
    sinon.assert.calledWithExactly(callback, error);
  });
});
