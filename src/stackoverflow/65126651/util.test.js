const sinon = require('sinon');
const chai = require('chai');
const proxyquire = require('proxyquire');
const expect = chai.expect;

describe('func1', () => {
  it('should work', () => {
    const func2Stub = sinon.stub().returns('everyone');
    const { func1 } = proxyquire('./util.js', {
      './a': {
        func2: func2Stub,
      },
    });
    expect(func1()).to.be.equal('hello everyone');
  });
});
