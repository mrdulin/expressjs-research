const fns = require('./');
const sinon = require('sinon');
const { expect } = require('chai');

describe('64705245', () => {
  afterEach(() => {
    sinon.restore();
  });
  describe('fn1', () => {
    it('should return foo', async () => {
      const fn2Stub = sinon.stub(fns, 'fn2').resolves();
      const actual = await fns.fn1();
      expect(actual).to.be.equal('foo');
      sinon.assert.calledOnce(fn2Stub);
    });
  });

  describe('fn2', () => {
    it('should pass', async () => {
      const fn3Stub = sinon.stub(fns, 'fn3').resolves();
      const fn4Stub = sinon.stub(fns, 'fn4').resolves();
      await fns.fn2();
      sinon.assert.calledOnce(fn3Stub);
      sinon.assert.calledOnce(fn4Stub);
    });
  });
});
