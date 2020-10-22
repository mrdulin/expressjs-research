const code = require('./code');
const sinon = require('sinon');
const { expect } = require('chai');

describe('64468517', () => {
  it('should pass', async () => {
    const returnedFn = sinon.stub().resolves([{ whatever: 'whatever' }]);
    const myHandler = {
      handle: sinon.stub().returns(returnedFn),
    };
    await code(myHandler).getStuff();
    expect(myHandler.handle.callCount).to.be.eq(1);
    sinon.assert.calledOnce(myHandler.handle);
    sinon.assert.calledWithExactly(returnedFn, 'something1', 'something2');
  });
});
