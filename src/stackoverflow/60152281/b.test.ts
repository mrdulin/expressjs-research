import sinon from 'sinon';
import proxyquire from 'proxyquire';

describe('60152281', () => {
  it('should do something', () => {
    const aStub = sinon.stub();
    const B = proxyquire('./b', {
      './a': {
        default: aStub,
      },
    }).default;
    const b = new B();
    b.doSomething({});
    sinon.assert.calledWithExactly(aStub, {});
  });
});
