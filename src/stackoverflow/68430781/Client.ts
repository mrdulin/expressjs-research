import { DocumentClient } from 'aws-sdk/clients/dynamodb';

export abstract class Client {
  static read = {
    pk: (pk: string) => {
      return {
        sk: async (sk: string) => {
          return await new DocumentClient()
            .get({
              TableName: 'TodoApp',
              Key: {
                PK: pk,
                SK: sk,
              },
            })
            .promise();
        },
      };
    },
  };
}
