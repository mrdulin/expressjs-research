const cache = require('./cache');
const sinon = require('sinon');
const { expect } = require('chai');

describe('62426207', () => {
  it('should call complex function', () => {
    let complexFunction = sinon.stub().callsFake((arg1, arg2) => {
      return arg1 + arg2;
    });
    let cachedFunction = cache(complexFunction);
    cachedFunction(1, 2);
    sinon.assert.calledWith(complexFunction, 1, 2);
    sinon.assert.calledOnce(complexFunction);
  });

  it('should not call complex function again', () => {
    let complexFunction = sinon.stub().callsFake((arg1, arg2) => {
      return arg1 + arg2;
    });
    let cachedFunction = cache(complexFunction);
    cachedFunction(1, 2);
    let ret = cachedFunction(1, 2);
    expect(ret).to.be.equal(3);
    sinon.assert.calledWith(complexFunction, 1, 2);
    sinon.assert.calledOnce(complexFunction);
  });

  it('should call complex function if arguments are different', () => {
    let complexFunction = sinon.stub().callsFake((arg1, arg2) => {
      return arg1 + arg2;
    });
    let cachedFunction = cache(complexFunction);
    let ret1 = cachedFunction(1, 2);
    expect(ret1).to.be.equal(3);
    let ret2 = cachedFunction(1, 5);
    expect(ret2).to.be.equal(6);
    sinon.assert.calledWith(complexFunction, 1, 2);
    sinon.assert.calledWith(complexFunction, 1, 5);
    sinon.assert.calledTwice(complexFunction);
  });
});
