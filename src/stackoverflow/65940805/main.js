const { Pool } = require('pg');

const pool = new Pool({
  connectionString: `some connection string...`,
});

var fun = async function (pk_name, pk_value) {
  try {
    const db = await pool.connect();
    const query = `SELECT *
                   FROM creds
                   WHERE ${pk_name} = $1`;
    var res = await db.query(query, [pk_value]);
    db.release();
    return res.rows;
  } catch (ex) {
    return [];
  }
};

module.exports.isValidUser = async function (pk_name, pk_value, password) {
  try {
    var userData = await fun(pk_name, pk_value);
    return userData[0].email === pk_value && userData[0].password === password;
  } catch (ex) {
    return false;
  }
};
