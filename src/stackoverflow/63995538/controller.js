let { Client } = require('pg');

exports.postgres_get_controller = (req, resp) => {
  console.log('Reached Here');
  let postgres = new Client({
    host: 'localhost',
    port: 5430,
    database: 'node-sequelize-examples',
    user: 'testuser',
    password: 'testpass',
  });

  postgres
    .connect()
    .then(() => console.log('connected'))
    .catch((err) => console.error('connection error', err.stack))
    .then(() =>
      postgres.end((err) => {
        console.log('postgres disconnected');
        if (err) {
          console.log('error during disconnection', err.stack);
        }
      }),
    );

  resp.sendStatus(200);
};
