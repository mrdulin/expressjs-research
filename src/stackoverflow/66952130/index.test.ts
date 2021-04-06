import chai from 'chai';
import chaiHttp from 'chai-http';
import { server } from './';

chai.use(chaiHttp);
const api = chai.request(server).keepOpen();

describe('GET /user/:id', () => {
  it('return user information', (done) => {
    api
      .get('/user/123')
      .set('Cookie', '_id=567;locale=en')
      .end(function (err, res) {
        chai.expect(res).to.have.status(200);
        done();
      });
  });
});
