const { expect } = require('chai');
const chai = require('chai');
const chaiSubset = require('chai-subset');
chai.use(chaiSubset);

describe('69555042', () => {
  it('should pass', () => {
    const expectedObject = {
      a: 'A',
      b: 123,
      c: ['x', 'y', 'z'],
    };
    const result = {
      a: 'A',
      b: 123,
      c: ['x', 'y', 'z'],
      random: 'dsfgshdfsg',
    };
    expect(result).to.containSubset(expectedObject);
    expect(typeof result.random).to.equal('string');
  });
});
