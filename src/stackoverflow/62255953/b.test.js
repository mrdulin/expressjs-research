const chai = require('chai');
const { expect } = chai;

describe('b', () => {
  it('should pass', () => {
    expect(chai.request).to.be.a('function');
  });
});
