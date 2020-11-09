const rewire = require('rewire');
const sinon = require('sinon');

describe('64741353', () => {
  it('should return true', (done) => {
    const mod = rewire('./my-tiny-example');
    const innerStub = sinon.stub().returns(1);
    mod.__with__({
      inner: innerStub,
    })(() => {
      const actual = mod.outer();
      sinon.assert.match(actual, true);
      done();
    });
  });
  it('should return true', (done) => {
    const mod = rewire('./my-tiny-example');
    const innerStub = sinon.stub().returns(0);
    mod.__with__({
      inner: innerStub,
    })(() => {
      const actual = mod.outer();
      sinon.assert.match(actual, false);
      done();
    });
  });
});
