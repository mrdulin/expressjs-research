const sinon = require('sinon');
const proxyquire = require('proxyquire');

describe('68370747', () => {
  it('should pass', () => {
    let verifyStub = sinon.stub();

    let { auditEvent } = proxyquire('./auditEvent', {
      '@mycompany/verifylib': {
        verify: verifyStub,
        '@noCallThru': true,
      },
    });

    auditEvent();
    sinon.assert.calledOnce(verifyStub);
  });
});
