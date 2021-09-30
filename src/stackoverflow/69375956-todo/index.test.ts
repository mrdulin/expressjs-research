// @ts-nocheck
import { expect } from 'chai';

function getIncorrectParams() {
  return new URLSearchParams({ from: '2020', to: '2021', ids: 'abc-1' });
}

describe('69375956', () => {
  it('should pass', () => {
    expect(getIncorrectParams()).not.to.deep.equal(new URLSearchParams({ from: '2020', to: '2021', ids: 'abc-2' }));
  });
  it.only('should pass', () => {
    class FakeURLSearchParams {
      #init;
      constructor(init) {
        this.#init = init;
      }
      get(key) {
        return this.#init[key];
      }
      say() {}
    }
    const a = new FakeURLSearchParams({ x: 1 });
    const b = new FakeURLSearchParams({ x: 2 });
    for (let p in a.prototype) {
      console.log(p);
    }
    expect(a).to.deep.equal(b);
    expect(a.get('x')).not.to.equal(b.get('x'));
  });
});
