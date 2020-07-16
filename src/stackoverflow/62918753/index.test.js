const sinon = require('sinon');
const AWS = require('aws-sdk');

describe('62918753', () => {
  it('should pass', async () => {
    const stsFake = {
      assumeRole: sinon.stub().returnsThis(),
      promise: sinon.stub(),
    };
    const STSStub = sinon.stub(AWS, 'STS').callsFake(() => stsFake);
    const authenticationService = require('./');
    await authenticationService.assumeRole('a-role-arn');
    sinon.assert.calledOnce(STSStub);
    sinon.assert.calledWith(stsFake.assumeRole, { RoleArn: 'a-role-arn', RoleSessionName: 'MessagingSession' });
    STSStub.restore();
  });
});
