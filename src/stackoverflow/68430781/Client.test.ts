import proxyquire from 'proxyquire';
import sinon from 'sinon';

describe('68430781', () => {
  it('should pass', async () => {
    const documentClientInstanceStub = {
      get: sinon.stub().returnsThis(),
      promise: sinon.stub().resolves('mocked data'),
    };
    const DocumentClientStub = sinon.stub().callsFake(() => documentClientInstanceStub);
    const { Client } = proxyquire('./Client', {
      'aws-sdk/clients/dynamodb': { DocumentClient: DocumentClientStub },
    });
    const actual = await Client.read.pk('a').sk('b');
    sinon.assert.match(actual, 'mocked data');
    sinon.assert.calledOnce(DocumentClientStub);
    sinon.assert.calledWithExactly(documentClientInstanceStub.get, {
      TableName: 'TodoApp',
      Key: {
        PK: 'a',
        SK: 'b',
      },
    });
    sinon.assert.calledOnce(documentClientInstanceStub.promise);
  });
});
