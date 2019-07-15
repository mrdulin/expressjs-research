const mod = require('./');
const sinon = require('sinon');
const { expect } = require('chai');

describe('39266915', () => {
  afterEach(() => {
    sinon.restore();
  });
  it('should return true', () => {
    sinon.stub(mod, 'B').returns('hi');
    const actual = mod.A('hi');
    expect(actual).to.be.true;
  });

  it('should return false', () => {
    sinon.stub(mod, 'B').returns('hello');
    const actual = mod.A('hi');
    expect(actual).to.be.false;
  });
});
