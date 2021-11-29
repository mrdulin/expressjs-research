const { app } = require('./app');
const supertest = require('supertest');

describe('70122092', () => {
  it('should pass', () => {
    const clientSenderId = '123';
    return supertest(app)
      .get('/transfers/pending')
      .set('Accept', 'application/json')
      .query({ senderId: clientSenderId })
      .expect(200);
  });

  it('should pass 2', () => {
    const clientSenderId = '123';
    return supertest(app)
      .get(`/transfers/pending?senderId=${clientSenderId}`)
      .set('Accept', 'application/json')
      .expect(200);
  });
});
