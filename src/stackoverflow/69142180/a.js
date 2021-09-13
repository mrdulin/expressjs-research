class RMQ {
  constructor(connectionURI) {
    this.URI = connectionURI;
  }
  async getInstance() {}
}

const RMQ_INSTANCE = new RMQ(process.env.RMQ_URL);

module.exports = { RMQ_INSTANCE };
