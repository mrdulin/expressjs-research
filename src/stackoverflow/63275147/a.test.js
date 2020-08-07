const proxyquire = require('proxyquire');
const { expect } = require('chai');
const sinon = require('sinon');

describe('63275147', () => {
  it('should pass', () => {
    const stubs = {
      './c': {
        getApiResult: sinon.stub().returns('stubbed result'),
        '@global': true,
      },
    };
    const a = proxyquire('./a', stubs);
    const actual = a.aGetResult();
    expect(actual).to.be.eq('stubbed result');
    sinon.assert.calledOnce(stubs['./c'].getApiResult);
  });
});
