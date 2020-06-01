const mysql = require('mysql');

export default class MySQL {
  conn;
  constructor(host, user, password, database, port = 3306) {
    this.conn = mysql.createConnection({
      host,
      port,
      user,
      password,
      database,
    });
  }

  query(sql, args) {
    return new Promise((resolve, reject) => {
      // eslint-disable-next-line consistent-return
      this.conn.query(sql, args, (err, rows) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(rows);
      });
    });
  }

  close() {
    return new Promise((resolve, reject) => {
      this.conn.end((err) => {
        if (err) {
          reject(err);
          return;
        }
        resolve();
      });
    });
  }
}
