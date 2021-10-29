const sinon = require('sinon');
const proxyquire = require('proxyquire').noCallThru().noPreserveCache();

let awsHelper;
let secretsManagerStub;

describe('AWS Helper: getCredsFromAWSSecretsManagera method', () => {
  before(() => {
    const data = {
      SecretString: JSON.stringify({ publicKey: 'secretUsername', privateKey: 'secretPassword' }),
    };

    secretsManagerStub = {
      getSecretValue: sinon.stub().returnsThis(),
      promise: sinon.stub().resolves(data),
    };

    const awsStub = {
      SecretsManager: sinon.stub().returns(secretsManagerStub),
    };
    awsHelper = proxyquire('./aws_helper.js', {
      'aws-sdk': awsStub,
    });
  });

  afterEach(() => {
    sinon.restore();
  });

  it('should write random data!', async () => {
    const data = await awsHelper.getCredsFromAWSSecretsManager();
    sinon.assert.callCount(secretsManagerStub.getSecretValue, 1);
    sinon.assert.match(data, { publicKey: 'secretUsername', privateKey: 'secretPassword' });
  });
});
