const rewire = require('rewire');
const sinon = require('sinon');
const { expect } = require('chai');

describe('Check processAllItems', () => {
  it('should pass', () => {
    const mod = rewire('./');
    const isItemValidStub = sinon.stub().returns(true);
    mod.__set__('isItemValid', isItemValidStub);
    const listOfItems = [0, 1];
    const actual = mod.processAllItems(listOfItems);
    expect(actual).to.be.eql([true, true]);
    sinon.assert.calledWithExactly(isItemValidStub.firstCall, 0);
    sinon.assert.calledWithExactly(isItemValidStub.secondCall, 1);
  });
});
