import { expect } from 'chai';

const num = 5;

describe('62770625', () => {
  it('should be 5', () => {
    expect(num).equal(5);
  });

  it('should be 5', () => {
    expect(num).to.be.equal(5);
  });

  it('should have members', () => {
    expect([{ a: 1 }]).deep.members([{ a: 1 }]);
    expect([{ a: 1 }]).to.have.deep.members([{ a: 1 }]);
  });
});
