const express = require('express');

const knex = require('knex')({
  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    port: 3306,
    user: 'your_database_user',
    password: 'your_database_password',
    database: 'myapp_test',
  },
});
const app = express();

app.use(express.json());
app.post('/api/categories', function (req, rep) {
  console.log(req.body);
  knex('categories')
    .insert(req.body)
    .then(() => rep.sendStatus(201).json({ message: 'Category inserted' }))
    .catch((err) => {
      console.log(err);
      rep.sendStatus(500);
    });
});

module.exports = app;
