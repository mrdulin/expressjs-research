import proxyquire from 'proxyquire';
import sinon from 'sinon';

describe('76519308', () => {
  beforeEach(() => {
    global.myConfig = global.myConfig || {};
    global.myConfig.DOMAIN = 'someValue';
  });

  it('should pass', () => {
    const AuthenticationClientStub = sinon.stub();
    const ClassToTest = proxyquire('./classToTest', {
      './auth0': {
        AuthenticationClient: AuthenticationClientStub,
      },
    }).default;
    ClassToTest.getClient();
    sinon.assert.match(AuthenticationClientStub.getCall(0).args[0].domain, 'someValue');
  });
});
