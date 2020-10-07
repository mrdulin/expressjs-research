const mysql2 = require('mysql2');

class Connection {
  constructor(options = {}) {
    this.options = options;
  }

  createPool() {
    this.pool = mysql2.createPool({
      host: this.options.host,
      user: this.options.user,
      database: 'analytics_payor_admin',
      ssl: 'Amazon RDS',
      password: this.options.password,
      authPlugins: {
        mysql_clear_password: () => () => Buffer.from(this.options.password + '\0'),
      },
    });
  }

  async insert(sql, values) {
    const promise = new Promise((resolve, reject) => {
      try {
        this.pool.query(sql, [values], function(error, results, fields) {
          if (error) throw error;
          console.log(results.affectedRows); //Show 1
          resolve(results.affectedRows);
        });
      } catch (e) {
        reject(e);
      }
    });
    return promise;
  }
}

module.exports = { Connection };
