const b = require('./b');
const sinon = require('sinon');
const proxyquire = require('proxyquire');

describe('61108610', () => {
  it('should pass', () => {
    const aInstanceStub = { foo: sinon.stub() };
    const aStub = sinon.stub().returns(aInstanceStub);
    const b = proxyquire('./b', {
      './a': aStub,
    });
    const logSpy = sinon.spy(console, 'log');
    const b_obj = new b();
    b_obj.baz();
    sinon.assert.calledOnce(aStub);
    sinon.assert.calledOnce(aInstanceStub.foo);
    sinon.assert.calledWithExactly(logSpy, 'i am from class b baz method');
  });
});
