import sinon from 'sinon';
import proxyquire from 'proxyquire';

describe('70666283', () => {
  it('should pass', () => {
    const getSecretStub = sinon.stub().returns('123');
    const urlctl = proxyquire('./controller', {
      './util/secrect-util': {
        getSecret: getSecretStub,
      },
    });
    const req = {};
    const res = { redirect: sinon.stub() };
    urlctl.getId(req, res);
    sinon.assert.calledWithExactly(getSecretStub, 'test/path');
    sinon.assert.calledWithExactly(res.redirect, 302, 'https://mytest.com?userid=123');
  });
});
