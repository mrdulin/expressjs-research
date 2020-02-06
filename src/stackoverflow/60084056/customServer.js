class CustomServer {
  constructor(port, callback) {
    this.port = port;
    this.server = http.createServer((request, response) => {
      callback(null, response);
    });
  }
}
module.exports = CustomServer;
