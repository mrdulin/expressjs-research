import { concat } from './concat';
import { expect } from 'chai';

describe('61353628', () => {
  it('should return concat result', () => {
    const str1 = 'hello';
    const str2 = 'world';
    const actual = concat(str1, str2);
    expect(actual).to.be.equal('hello world');
  });
  it('should throw error when str1 is empty', () => {
    const str1 = '';
    const str2 = 'world';
    expect(() => concat(str1, str2)).to.throw('either of the strings are empty');
  });

  it('should throw error when str2 is empty', () => {
    const str1 = 'hello';
    const str2 = '';
    expect(() => concat(str1, str2)).to.throw('either of the strings are empty');
  });
});
