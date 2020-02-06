const CustomServer = require('./customServer');

class A {
  listenResponse(port, callback) {
    const server = new CustomServer(port, (error, response) => {
      if (error) return callback(error);
      callback(null, response);
    });
  }
}

module.exports = A;
