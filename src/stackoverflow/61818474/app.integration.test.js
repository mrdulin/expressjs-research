const chai = require('chai');
const chaiHttp = require('chai-http');
const sandbox = require('sinon').createSandbox();
const mws = require('./mws');

chai.use(chaiHttp);
const expect = chai.expect;

describe('61818474', () => {
  afterEach(() => {
    sandbox.restore();
  });
  it('Should return data by id', (done) => {
    sandbox.stub(mws, 'authUser').callsFake((options) => (req, res, next) => {
      return next();
    });
    const server = require('./app');
    const req = { id: '123' };
    chai
      .request(server)
      .post('/user')
      .send(req)
      .end((request, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.success).to.equal(true);
        sandbox.assert.calledWith(mws.authUser, { option1: '1', option2: '2' });
        done();
      });
  });
});
