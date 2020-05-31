const server = require('./server');
const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
chai.should();

describe('62080151', () => {
  describe('GET /logMessage', () => {
    it('should host logger api', (done) => {
      chai
        .request(server)
        .get('/logMessage?message=testMessage')
        .end((err, response) => {
          response.should.have.status(200);
          done();
        });
    });

    it('should handle error', (done) => {
      sinon.stub(console, 'info').callsFake((message) => {
        if (message === 'makeError') {
          throw new Error('custom error');
        }
      });
      sinon.spy(console, 'error');
      chai
        .request(server)
        .get('/logMessage?message=makeError')
        .end((err, response) => {
          response.should.have.status(200);
          sinon.assert.match(console.error.firstCall.calledWithExactly('error in logging'), true);
          console.error.secondCall.args[0].should.be.instanceOf(Error);
          done();
        });
    });
  });
});
