const { expect } = require('chai');

describe('description here', () => {
  it('should pass', () => {
    expect(1 + 1).to.be.equal(2);
  });
  it('should fail', () => {
    expect(1 + 1).to.be.equal(3);
  });
});
