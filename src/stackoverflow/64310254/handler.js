const conns = require('./connection');

let response = {
  statusCode: 200,
  body: {
    message: 'SQS event processed.',
  },
};

exports.handler = async (event) => {
  console.log(event.Records);
  const options = {};
  const [values1, values2, values3] = [1, 2, 3];
  try {
    const conn = new conns.Connection(options);
    conn.createPool();

    const sql1 =
      'INSERT INTO table1(field1, field2, field4, created_date, modified_date, created_by, modified_by) VALUES ?';
    const sql2 =
      'INSERT INTO table2(field1, field2, field4, created_date, modified_date, created_by, modified_by) VALUES ?';
    const sql3 =
      'INSERT INTO table3(field1, field2, field4, created_date, modified_date, created_by, modified_by) VALUES ?';

    await conn.transaction(async (connection) => {
      await connection.query(sql1, [values1]);
      await connection.query(sql2, [values2]);
      await connection.query(sql3, [values3]);
    });
  } catch (e) {
    console.log('There was an error while processing', { errorMessage: e });

    response = {
      statusCode: 400,
      body: e,
    };
  }

  return response;
};
