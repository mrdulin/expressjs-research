const app = require('./server');
const UnoModel = require('./UnoModel');
const request = require('request');
const sinon = require('sinon');
const { expect } = require('chai');

describe('61172026', () => {
  const port = 8080;
  let server;
  before((done) => {
    server = app.listen(port, () => {
      console.log(`http server is listening on http://localhost:${port}`);
      done();
    });
  });
  after((done) => {
    server.close(done);
  });
  it('should pass', (done) => {
    sinon.stub(UnoModel, 'getGameInfo').resolves({ id: '123456789012' });
    request({ url: 'http://localhost:8080/api/v1/game/uno/123456789012/info' }, function(error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });
});
