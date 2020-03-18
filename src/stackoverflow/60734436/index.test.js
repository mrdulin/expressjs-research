const { postloginValues } = require('./');
var authHandler = require('./authenticationHandler');
const sinon = require('sinon');

describe('60734436', () => {
  it('should pass', () => {
    const validateRealEdUserStub = sinon.stub(authHandler, 'validateRealEdUser');
    const mReq = { body: { password: '123', uName: 'james' } };
    const mRes = {};
    postloginValues(mReq, mRes);
    sinon.assert.calledWithExactly(
      validateRealEdUserStub,
      JSON.stringify({ loginName: 'james', userPassword: Buffer.from(mReq.body.password).toString('base64') }),
      mRes,
    );
    validateRealEdUserStub.reset();
  });
});
