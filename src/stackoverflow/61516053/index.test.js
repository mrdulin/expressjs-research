const sinon = require('sinon');
const AWS = require('aws-sdk');

describe('61516053', () => {
  afterEach(() => {
    sinon.restore();
  });
  it('should pass', async () => {
    const mLambda = { invoke: sinon.stub().returnsThis(), promise: sinon.stub() };
    sinon.stub(AWS, 'Lambda').callsFake(() => mLambda);
    const mDocumentClient = { get: sinon.stub().returnsThis(), promise: sinon.stub() };
    sinon.stub(AWS.DynamoDB, 'DocumentClient').callsFake(() => mDocumentClient);

    sinon.stub(AWS.config, 'update');
    const { handler } = require('./');
    await handler();
    sinon.assert.calledWith(AWS.config.update, { region: 'us-west-2' });
    sinon.assert.calledOnce(AWS.DynamoDB.DocumentClient);
    sinon.assert.calledOnce(AWS.Lambda);
    sinon.assert.calledWith(mLambda.invoke, {});
    sinon.assert.calledOnce(mLambda.promise);
    sinon.assert.calledWith(mDocumentClient.get, {});
    sinon.assert.calledOnce(mDocumentClient.promise);
  });
});
