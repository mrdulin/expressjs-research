const rewire = require('rewire');
const mod = rewire('./a');
const { expect } = require('chai');

describe('49504977', () => {
  it('a1', (done) => {
    mod.__with__(
      'a2',
      (token) => 'testmessage',
    )(() => {
      const actual = mod.__get__('a1')('param');
      expect(actual).to.be.eq('testmessage');
      done();
    });
  });

  it('a2', () => {
    const actual = mod.__get__('a2')();
    expect(actual).to.be.eq('result2');
  });
});
