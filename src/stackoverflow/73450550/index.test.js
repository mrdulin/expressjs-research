const { expect } = require('chai');

describe('73450550', () => {
  it('should pass', () => {
    const ACT_PROVIDER_KEYS = '';
    expect(ACT_PROVIDER_KEYS, 'api provider keys is empty').to.be.an('string').not.empty;
  });
});
