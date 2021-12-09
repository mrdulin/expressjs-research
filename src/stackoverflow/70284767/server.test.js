const { createServer } = require('./server');
const chai = require('chai');
const chaiHTTP = require('chai-http');
const { expect } = require('chai');
chai.use(chaiHTTP);

describe('70284767', () => {
  it('should pass', async () => {
    const server = await createServer();
    chai
      .request(server)
      .get('/')
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res.text).to.be.equal('hello world');
      });
  });
});
