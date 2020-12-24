import { expect } from 'chai';

describe('60829224', () => {
  const obj = { a: '0', b: '1', c: '2' };
  it('should pass if the fixed set of keys has less key', () => {
    const actualObjectKeys = Object.keys(obj);
    expect(actualObjectKeys).to.include.members(['a', 'b']);
  });

  it('should not pass if the fixed set of keys has extra key', () => {
    const actualObjectKeys = Object.keys(obj);
    expect(actualObjectKeys).to.not.include.members(['a', 'b', 'c', 'd']);
    expect(actualObjectKeys).to.not.include.members(['a', 'd']);
  });
});
