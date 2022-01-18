const MongoClient = require('mongodb').MongoClient;
const dbName = 'test';
const url = process.env.MONGO_URL;

const client = new MongoClient(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const init = () => {
  return client.connect().then(() => {
    console.info(`mongdb db:${dbName} connected`);
    const db = client.db(dbName);
  });
};

module.exports = {
  init,
  client,
  get db() {
    return client.db(dbName);
  },
};
