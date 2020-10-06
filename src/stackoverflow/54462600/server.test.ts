import * as utils from './utils';
import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';

chai.use(chaiHttp);

describe('testing routes', () => {
  it('should enter the route body', (done) => {
    const isSessionCookieValidStub = sinon.stub(utils, 'isSessionCookieValid').callsFake((req, res, next) => {
      next();
    });
    const { app } = require('./server');
    chai
      .request(app)
      .post('/url')
      .end((error, response) => {
        if (error) {
          return done(error);
        }
        sinon.assert.calledOnce(isSessionCookieValidStub);
        expect(response).to.have.status(200);
        done();
      });
  });
});
