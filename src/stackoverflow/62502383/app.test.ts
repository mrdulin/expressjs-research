import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import { app } from './app';
import { UserModel } from './UserModel';
import sinon from 'sinon';

chai.use(chaiHttp);

describe('62502383', () => {
  it('should pass', (done) => {
    const mError = new Error('stub: Internal server error');
    const findByIdStub = sinon.stub(UserModel, 'findById').rejects(mError);
    chai
      .request(app)
      .get('/user/1')
      .end((err, res) => {
        sinon.assert.calledWith(findByIdStub, 1);
        expect(res).to.have.status(500);
        expect(err).to.be.null;
        expect(res.body.error).to.be.equal('stub: Internal server error');
        done();
      });
  });
});
