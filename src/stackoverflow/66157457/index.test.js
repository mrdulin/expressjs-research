const test = require('firebase-functions-test')();
const admin = require('firebase-admin');
test.mockConfig({ stripe: { client_id: 'client_123' } });
const sinon = require('sinon');
const proxyquire = require('proxyquire');

describe('66157457', () => {
  afterEach(() => {
    sinon.restore();
  });
  it('should send message', async () => {
    const authStub = { auth: sinon.stub().returnsThis(), verifyIdToken: sinon.stub().resolves('token_123') };
    const adminInitStub = sinon.stub(admin, 'initializeApp').returns(authStub);
    const request = { query: { id_token: 'abc' } };
    const response = { status: sinon.stub().returnsThis(), json: sinon.stub() };
    const stripeStub = { xxx: sinon.stub().resolves('fake message') };
    const stripeFactory = sinon.stub().returns(stripeStub);
    const subscribe = proxyquire('./', {
      stripe: stripeFactory,
    });
    await subscribe(request, response);
    sinon.assert.calledOnce(adminInitStub);
    sinon.assert.calledWithExactly(stripeFactory, 'client_123');
    sinon.assert.calledOnce(authStub.auth);
    sinon.assert.calledWithExactly(authStub.verifyIdToken, 'abc');
    sinon.assert.calledWithExactly(stripeStub.xxx, 'token_123');
    sinon.assert.calledWithExactly(response.status, 200);
    sinon.assert.calledWithExactly(response.json, { message: 'fake message' });
    test.cleanup();
  });
});
