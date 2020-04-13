const request = require('supertest');
const proxyquire = require('proxyquire');
const { expect } = require('chai');

describe('60990025', () => {
  it('should get user', (done) => {
    const config = { user: { name: 'jane' } };
    const server = proxyquire('./', {
      './config': config,
    });
    request(server)
      .get('/api/user')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).to.be.eql({ name: 'jane' });
        done();
      });
  });
});
