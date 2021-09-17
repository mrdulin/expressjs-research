const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.HEROKU_POSTGRESQL_BLUE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

async function queryWithParameter(queryToExecute, parameterReq) {
  var result;
  var finalResult;

  try {
    const client = await pool.connect();

    try {
      if (parameterReq == null) result = await client.query(queryToExecute);
      else result = await client.query(queryToExecute, parameterReq);
      finalResult = result.rows;
    } catch (err) {
      console.error('error in queryWithParameter : ' + err);
    } finally {
      client.release(true);
    }
  } catch (err) {}

  return finalResult;
}

module.exports = { queryWithParameter };
