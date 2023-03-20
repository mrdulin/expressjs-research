const proxyquire = require('proxyquire');
const sinon = require('sinon');

describe('75761657', () => {
  it('should pass', () => {
    const composeStub = sinon.stub().withArgs(1, 2).returns(100);
    const complicatedFunction = proxyquire('./complicatedFunction', {
      './compose': {
        compose: composeStub,
      },
    });
    const actual = complicatedFunction();
    sinon.assert.match(actual, 100);
  });
});
