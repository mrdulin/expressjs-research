const { app } = require('./app');
const moxios = require('moxios');
const request = require('supertest');
const { expect } = require('chai');

describe('Moxios', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });
  it('should return a 200 and confirmation status', (done) => {
    moxios.stubRequest('https://anime.website.com/', {
      status: 200,
      response: [{ titles: ['Naruto', 'Bleach', 'Fate/Stay Night', 'Death Note', 'Code Geass'] }],
    });
    moxios.stubRequest('https://manga.website.com/', {
      status: 200,
      response: [{ titles: ['Naruto', 'Bleach', 'Fate/Stay Night', 'Death Note', 'Code Geass'] }],
    });

    request(app)
      .get('/endpoint')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(200)
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        expect(res.body).to.deep.equal({
          watch: ['Naruto', 'Bleach', 'Fate/Stay Night', 'Death Note', 'Code Geass'],
          read: ['Naruto', 'Bleach', 'Fate/Stay Night', 'Death Note', 'Code Geass'],
        });
        done();
      });
  });
});
