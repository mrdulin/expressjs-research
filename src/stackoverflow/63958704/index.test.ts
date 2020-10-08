import { MyClass } from './';
import { expect } from 'chai';

describe('63958704', () => {
  it('should throw error if no parameter passed in the constructor', () => {
    expect(() => new MyClass(1 as any)).to.throw('expect "string" type for "name" argument');
  });
});
