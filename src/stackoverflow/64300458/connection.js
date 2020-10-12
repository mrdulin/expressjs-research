const mysql2 = require('mysql2/promise');

class Connection {
  constructor(options = {}) {
    this.options = options;
  }

  createPool() {
    this.pool = mysql2.createPool({
      host: this.options.host,
      user: this.options.user,
      database: 'my_db',
      ssl: 'Amazon RDS',
      password: this.options.password,
      authPlugins: {
        mysql_clear_password: () => () => Buffer.from(this.options.password + '\0'),
      },
    });
  }
}
module.exports = { Connection };
