import { expect } from 'chai';

describe('72411318', () => {
  beforeEach(() => {
    delete require.cache[require.resolve('./checkFunction')];
    delete require.cache[require.resolve('./constants')];
  });
  it('should pass', () => {
    const { myarray } = require('./constants');
    myarray.splice(0, myarray.length);
    myarray.push('beef', 'lobster');
    const { check } = require('./checkFunction');
    expect(check('apples')).to.be.false;
  });

  it('should pass 2', () => {
    const { check } = require('./checkFunction');
    expect(check('apples')).to.be.true;
  });
});
