const sinon = require('sinon');
const { func1 } = require('./util');
const a = require('./a');
const chai = require('chai');
const expect = chai.expect;

describe('func1', () => {
  it('should work', () => {
    const stub = sinon.stub(a, 'func2').returns('everyone');
    expect(func1()).to.be.equal('hello everyone');
  });
});
