// @ts-nocheck
import { expect } from 'chai';

function getIncorrectParams() {
  return new URLSearchParams({ from: '2020', to: '2021', ids: 'abc-1' });
}

describe('69375956', () => {
  it('should pass', () => {
    expect(getIncorrectParams()).not.to.deep.equal(new URLSearchParams({ from: '2020', to: '2021', ids: 'abc-2' }));
  });
  it.only('should 2', () => {
    class A {
      constructor(val) {
        this.val = val;
      }
      hello() {}
    }
    expect(new A()).to.deep.equal(new A());
  });
});

const s = new URLSearchParams({ from: '2020', to: '2021', ids: 'abc-2' });
for (let p in s) {
  if (typeof s[p] !== 'function') {
    console.log(p);
  }
}
