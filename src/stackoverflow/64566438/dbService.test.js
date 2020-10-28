const sinon = require('sinon');
const AWS = require('aws-sdk');
const expect = require('chai').expect;

describe('dbService: When database returns a record', function() {
  afterEach(() => {
    sinon.restore();
  });
  it('Should have expected value', async function() {
    const mDynamo = { get: sinon.stub().returnsThis(), promise: sinon.stub().resolves({ Item: 'an item' }) };
    const mDocumentClient = sinon.stub(AWS.DynamoDB, 'DocumentClient').returns(mDynamo);
    const dbService = require('./dbService');
    const actual = await dbService.getItem();
    expect(actual.Item).to.be.equal('an item');
    sinon.assert.calledOnce(mDocumentClient);
    sinon.assert.calledWithExactly(mDynamo.get, {});
    sinon.assert.calledOnce(mDynamo.promise);
  });

  it('should return error', async () => {
    const mError = new Error('network');
    const mDynamo = { get: sinon.stub().returnsThis(), promise: sinon.stub().rejects(mError) };
    const mDocumentClient = sinon.stub(AWS.DynamoDB, 'DocumentClient').returns(mDynamo);
    const dbService = require('./dbService');
    const actual = await dbService.getItem();
    expect(actual.message).to.be.eql('network');
    sinon.assert.calledOnce(mDocumentClient);
    sinon.assert.calledWithExactly(mDynamo.get, {});
    sinon.assert.calledOnce(mDynamo.promise);
  });
});
