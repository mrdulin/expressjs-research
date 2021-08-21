const sinon = require('sinon');
const { expect } = require('chai');
const proxyquire = require('proxyquire');

describe('Test File B', function() {
  it('Example of failing stub', function() {
    const doSomethingStub = sinon.stub().returns(15);
    const fileB = proxyquire('./fileB', {
      './fileA': { doSomething: doSomethingStub },
    });
    expect(fileB.doAnotherThing()).to.equal(25);
    sinon.assert.calledOnce(doSomethingStub);
  });
});
