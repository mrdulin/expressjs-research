const chai = require('chai');
const { expect } = chai;

describe('a', () => {
  it('should pass', () => {
    expect(chai.request).to.be.a('function');
  });
});
