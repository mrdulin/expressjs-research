const mysql = require('mysql2/promise');

class Conn {
  constructor(options = {}) {
    this.options = options;
  }

  async getPool() {
    return mysql.createPool(this.options);
  }

  async setConnection() {
    this.dbOptions = {
      host: this.options.host,
      user: this.options.user,
      ssl: 'Amazon RDS',
      password: this.token,
      authPlugins: {
        mysql_clear_password: () => () => Buffer.from(this.token + '\0'),
      },
    };

    this.pool = await this.getPool(this.dbOptions);
    this.conn = await this.pool.getConnection();
  }

  async executeQuery() {
    this.dbResult = await this.conn.query('select 1 + 1 as solution');
    this.conn.release();
  }
}

module.exports = { Conn };
