import * as AWS from 'aws-sdk';
AWS.config.update({ region: 'us-west-2' });
const secretARN = process.env['SECRETARN'];
const resourceARN = process.env['RESOURCEARN'];
const databaseName = process.env['DATABASE'];

const rdsDataService = new AWS.RDSDataService();

const addID = async (myID: string, userIds: string[], param3: string) => {
  const updateQuery = 'my update sql query';

  const sqlParams: any = {
    secretArn: secretARN,
    resourceArn: resourceARN,
    sql: updateQuery,
    database: databaseName,
    includeResultMetadata: true,
  };
  await rdsDataService
    .executeStatement(sqlParams)
    .promise()
    .then(() => {
      console.info('Update Query succeeded');
    })
    .catch((error) => {
      console.info(error);
      throw new Error('Unable to perform update for given users');
    });
};

export default { addID };
