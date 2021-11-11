const proxyquire = require('proxyquire').noCallThru();
const sinon = require('sinon');

describe('69852777', () => {
  it('should pass', async () => {
    const phinStub = sinon.stub().resolves(true);
    const requestHelper = proxyquire('./requestHelper', {
      phin: phinStub,
    });
    const result = await requestHelper.request({ something: 'something' });
    sinon.assert.match(result, true);
    sinon.assert.calledWithExactly(phinStub, { something: 'something' });
  });
});
