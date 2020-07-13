const config = {};
const pgp = require('pg-promise')();
const db = pgp(config);

class Connection {
  constructor() {
    console.log('Connection ctor');
  }

  getDb() {
    console.log('getDb');
    return db;
  }
}

module.exports = new Connection();
