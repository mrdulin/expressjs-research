import AWS from 'aws-sdk';
import sinon from 'sinon';

describe('68431461', () => {
  let sandbox: sinon.SinonSandbox;

  before(() => {
    sandbox = sinon.createSandbox();
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should pass', async () => {
    const s3InstanceStub = { upload: sandbox.stub() };
    const s3Stub = sandbox.stub(AWS, 'S3').callsFake(() => s3InstanceStub);
    const { storage } = await import('./storage');
    const onProgressStub = sandbox.stub();
    await storage.upload('./package.json', 's3Key', onProgressStub);
    sinon.assert.calledOnce(s3Stub);
    sinon.assert.calledOnce(s3InstanceStub.upload);
  });
});
