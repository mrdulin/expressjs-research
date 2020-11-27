var mysql = require('mysql');

require('dotenv').config();

const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;
const dbData = process.env.DB_DATA;

var connection = mysql.createConnection({
  host: dbHost,
  user: dbUser,
  password: dbPass,
  database: dbData,
});

connection.connect(function(err) {
  if (err) throw err;
  console.log('connected');
});

module.exports = connection;
