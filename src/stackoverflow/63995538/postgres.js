let { Client } = require('pg');

let postgres = new Client({
  host: 'localhost',
  port: 5430,
  database: 'node-sequelize-examples',
  user: 'testuser',
  password: 'testpass',
});

module.exports = postgres;
