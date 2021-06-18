import { SQSClient, ReceiveMessageCommand } from '@aws-sdk/client-sqs';
const sqsClient = new SQSClient({ region: 'REGION' });

const params = {
  AttributeNames: ['SentTimestamp'],
  MaxNumberOfMessages: 10,
  QueueUrl: 'paymentsUrl',
};

export const getPolledMessages = async () => {
  const data = await sqsClient.send(new ReceiveMessageCommand(params));
};
