const app = require('./app');
const supertest = require('supertest');

describe('returns cat sound and key', function() {
  it('responds with json', function(done) {
    const key = '12345';
    supertest(app)
      .get(`/url/${key}`)
      .set('Accept', 'application/json')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect({ Key: key, Cat: 'meow' })
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
  });
});
