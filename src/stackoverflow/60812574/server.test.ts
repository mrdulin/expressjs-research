import { app } from './server';
import request from 'supertest';
import { expect } from 'chai';

describe('test', () => {
  describe('Get User Data', () => {
    it('bla bla bla', (done) => {
      request(app)
        .post('/user/login')
        .field({
          username: 'ihdisetiawan',
          password: 'testing123',
        })
        .set('x-api-key', '1234567890')
        .end((err, res) => {
          expect(res.status).to.equal(200);
          done();
        });
    });
  });
});
