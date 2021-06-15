let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('./app');

const expect = chai.expect;
const endpoint = 'http://127.0.0.1:3000';
chai.use(chaiHttp);

describe('Create Login and Register', () => {
  let server;
  before(() => {
    server = app.listen(3000, () => {
      console.log('started for testing');
    });
  });
  after(() => {
    server.close();
  });
  it('should login using credentials', (done) => {
    chai
      .request(endpoint)
      .get('/register')
      .send()
      .then((res) => {
        expect(res).to.have.status(200);
        done();
      })
      .catch((err) => {
        done(err);
      });
  });
});
