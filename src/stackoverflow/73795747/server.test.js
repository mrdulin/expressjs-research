const ioc = require('socket.io-client');
const assert = require('assert');

describe('73795747', () => {
  let io, clientSocket;
  before((done) => {
    io = require('./server');
    clientSocket = ioc('http://localhost:3000');
    clientSocket.on('connect', done);
  });
  after(() => {
    io.close();
    clientSocket.close();
  });

  it('should connect socket server and emit message', (done) => {
    clientSocket.on('message', (data) => {
      assert.strictEqual(data, 'Hello World!');
      done()
    });
    clientSocket.emit('message', 'Hello World!');
  });
});
