import proxyquire from 'proxyquire';
import sinon from 'sinon';

describe('68017252', () => {
  it('should pass', async () => {
    const sqsClientInstance = {
      send: sinon.stub(),
    };
    const SQSClient = sinon.stub().returns(sqsClientInstance);
    const ReceiveMessageCommand = sinon.stub();
    const { getPolledMessages } = proxyquire('./', {
      '@aws-sdk/client-sqs': {
        SQSClient,
        ReceiveMessageCommand,
      },
    });
    await getPolledMessages();
    sinon.assert.calledWithExactly(SQSClient, { region: 'REGION' });
    sinon.assert.calledOnce(sqsClientInstance.send);
    sinon.assert.calledWithExactly(ReceiveMessageCommand, {
      AttributeNames: ['SentTimestamp'],
      MaxNumberOfMessages: 10,
      QueueUrl: 'paymentsUrl',
    });
  });
});
