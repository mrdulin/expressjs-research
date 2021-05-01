const AWS = require('aws-sdk');
const sinon = require('sinon');
const { expect } = require('chai');

describe('67322634', () => {
  afterEach(() => {
    sinon.restore();
  });
  it('should get secret value', async () => {
    const data = {
      SecretString: JSON.stringify({ publicKey: 'secretUsername', privateKey: 'secretPassword' }),
    };
    const secretsManagerStub = {
      getSecretValue: sinon.stub().callsFake((params, callback) => {
        callback(null, data);
      }),
    };
    const SecretsManagerStub = sinon.stub(AWS, 'SecretsManager').returns(secretsManagerStub);
    const main = require('./main');
    const { username, password } = await main('1');
    expect(username).to.equal('secretUsername');
    expect(password).to.equal('secretPassword');
    sinon.assert.calledOnce(SecretsManagerStub);
    sinon.assert.calledOnceWithExactly(
      secretsManagerStub.getSecretValue,
      {
        SecretId: '1',
      },
      sinon.match.func,
    );
  });
});
