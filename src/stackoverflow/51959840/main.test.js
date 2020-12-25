const proxyquire = require('proxyquire');
const sinon = require('sinon');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
const { expect } = chai;

describe('51959840', () => {
  afterEach(() => {
    sinon.restore();
  });
  it('should do nothing if codeId is equal with curr_id', async () => {
    const fileObject = { id: '1' };
    const s3Mock = {
      getObject: sinon.stub().returnsThis(),
      promise: sinon.stub().resolves(fileObject),
    };
    const AWSMock = { S3: sinon.stub().returns(s3Mock) };
    const { execute } = proxyquire('./main', {
      'aws-sdk': AWSMock,
    });
    await execute('1');
    sinon.assert.calledOnce(AWSMock.S3);
    sinon.assert.calledWithExactly(s3Mock.getObject, { Bucket: 'examplebucket', Key: 'SampleFile.txt' });
    sinon.assert.calledOnce(s3Mock.promise);
  });

  it('should throw error if codeId is NOT equal with curr_id', async () => {
    const fileObject = { id: '2' };
    const s3Mock = {
      getObject: sinon.stub().returnsThis(),
      promise: sinon.stub().resolves(fileObject),
    };
    const AWSMock = { S3: sinon.stub().returns(s3Mock) };
    const { execute } = proxyquire('./main', {
      'aws-sdk': AWSMock,
    });
    await expect(execute('1')).to.rejectedWith('Id from executed code does not match currentId: 1');
    sinon.assert.calledOnce(AWSMock.S3);
    sinon.assert.calledWithExactly(s3Mock.getObject, { Bucket: 'examplebucket', Key: 'SampleFile.txt' });
    sinon.assert.calledOnce(s3Mock.promise);
  });
});
