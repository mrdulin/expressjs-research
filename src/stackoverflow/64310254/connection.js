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

  async transaction(callback) {
    const connection = await this.pool.getConnection();
    await connection.beginTransaction();

    try {
      await callback(connection);
      await connection.commit();
    } catch (err) {
      await connection.rollback();
      console.log('An exception was thrown and the mysql transaction has been rolled back', err);
    } finally {
      connection.release();
    }
  }
}
module.exports = { Connection };
