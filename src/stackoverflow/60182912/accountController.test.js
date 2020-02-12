const AccountController = require('./accountController');
const sinon = require('sinon');
const validation = require('./validation');

describe('60182912', () => {
  afterEach(() => {
    sinon.restore();
  });
  describe('#sum', () => {
    it('should increase count and send', () => {
      const registerInstanceStub = {
        validate: sinon.stub().returns(true),
      };
      const registerStub = sinon.stub(validation, 'register').callsFake(() => registerInstanceStub);
      const accountController = new AccountController();
      const mRes = { send: sinon.stub() };
      const mReq = { body: { form: {} } };
      accountController.sum(mReq, mRes);
      sinon.assert.calledWithExactly(mRes.send, 1);
      sinon.assert.calledOnce(registerStub);
      sinon.assert.calledWithExactly(registerInstanceStub.validate, {});
    });

    it('should decrease count and send', () => {
      const registerInstanceStub = {
        validate: sinon.stub().returns(false),
      };
      const registerStub = sinon.stub(validation, 'register').callsFake(() => registerInstanceStub);
      const accountController = new AccountController();
      const mRes = { send: sinon.stub() };
      const mReq = { body: { form: {} } };
      accountController.sum(mReq, mRes);
      sinon.assert.calledWithExactly(mRes.send, -1);
      sinon.assert.calledOnce(registerStub);
      sinon.assert.calledWithExactly(registerInstanceStub.validate, {});
    });
  });
});
