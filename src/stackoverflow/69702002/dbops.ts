import mysql from 'mysql';
import { promisify } from 'util';

const connectionParams: any = {
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  port: parseInt(process.env.PORT || '3306'),
};
var connection: any;

const getRecords = async (inputValue: string) => {
  const sqlQuery = 'SELECT * FROM tests';
  const value1 = '';
  const userIds: string[] = [];
  console.info('Creating mysql connection');
  try {
    connection = mysql.createConnection(connectionParams);
    const query = promisify(connection.query).bind(connection);
    const queryResult = await query({ sql: sqlQuery, timeout: 1000, values: value1, inputValue });
    if (queryResult) {
      queryResult.forEach((row) => {
        userIds.push(row.userid);
      });
    }
  } catch (error) {
    console.info(error);
    throw new Error('Could not retrieve user IDs');
  } finally {
    connection.end();
  }
  return userIds;
};

export { getRecords };
