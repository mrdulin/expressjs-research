const proxyquire = require('proxyquire');
const sinon = require('sinon');

describe('60704684', () => {
  it('should send', async () => {
    const otpServiceStub = {
      verifyOTP: sinon.stub().resolves({ error: null, data: 'fake data' }),
      generateOTP: sinon.stub(),
    };
    const { send } = proxyquire('./otp', {
      './OtpService': otpServiceStub,
    });
    const mReq = { query: { phone: '123', otp: 'otp' } };
    const mRes = {};
    await send(mReq, mRes);
    sinon.assert.calledWithExactly(otpServiceStub.verifyOTP, '123', 'otp');
  });

  it('should verfiy', async () => {
    const otpServiceStub = {
      verifyOTP: sinon.stub(),
      generateOTP: sinon.stub().resolves({ error: null, data: 'fake data' }),
    };
    const { verify } = proxyquire('./otp', {
      './OtpService': otpServiceStub,
    });
    const mReq = { query: { phone: '123' } };
    const mRes = {};
    await verify(mReq, mRes);
    sinon.assert.calledWithExactly(otpServiceStub.generateOTP, '123');
  });
});
