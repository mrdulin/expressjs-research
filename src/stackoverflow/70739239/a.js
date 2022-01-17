const dbConnection = require('./db-connection.js');

module.exports = function () {
  const dbClient = dbConnection.db;
  const docs = dbClient.collection('test').find();

  if (!docs) {
    return true;
  }
};
