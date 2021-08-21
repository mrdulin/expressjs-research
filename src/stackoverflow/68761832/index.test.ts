import AWS, { AWSError } from 'aws-sdk';
import { DocumentClient } from 'aws-sdk/clients/dynamodb';
import { expect } from 'chai';
import sinon from 'sinon';
import { checkIfUserExist } from '.';

describe('68761832', () => {
  it('With error @ query', async () => {
    const mReq = { promise: sinon.stub().resolves({ $response: { error: new Error('network') } }) };
    const queryStub = sinon
      .stub(AWS.DynamoDB.DocumentClient.prototype, 'query')
      .returns((mReq as unknown) as AWS.Request<DocumentClient.QueryOutput, AWSError>);
    const input = {
      Email: 'pleaseneverregisteruserwiththisemail@gmail.com',
    };
    const output = await checkIfUserExist(input);
    expect(output).to.equal(true);
    expect(queryStub.calledOnce).true;
    expect(mReq.promise.calledOnce).true;
    sinon.restore();
  });
});
