const controller = require('./');
const CustomError = require('./customError');
const sinon = require('sinon');
const { expect } = require('chai');

describe('61879445', () => {
  it('should throw error if user not found', async () => {
    const mNext = sinon.stub();
    const mReq = {};
    const mRes = {};
    await controller.getUser(mReq, mRes, mNext);
    // chai way
    expect(mNext.getCall(0).args[0]).to.be.an.instanceof(CustomError);
    expect(mNext.getCall(0).args[0]).to.have.property('message', '找不到使用者');
    expect(mNext.getCall(0).args[0]).to.have.property('code', 404);
    // sinon way
    sinon.assert.calledWith(
      mNext,
      sinon.match
        .instanceOf(CustomError)
        .and(sinon.match.has('message', '找不到使用者'))
        .and(sinon.match.has('code', 404)),
    );
  });
});
