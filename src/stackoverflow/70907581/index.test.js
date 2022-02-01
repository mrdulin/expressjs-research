const supertest = require('supertest');
const axios = require('axios');
const sinon = require('sinon');
const { app } = require('./index');

describe('ADMINS GET API, METHOD: GET', () => {
  it('/admins', async () => {
    const sandbox = sinon.createSandbox();
    sandbox
      .stub(axios, 'get')
      .withArgs('http://save')
      .resolves({ data: { sum: 12 } });

    await supertest(app)
      .get('/admins')
      .expect(200)
      .then(async (response) => {
        sinon.assert.match(response.body.code, 200);
        sinon.assert.match(response.body.sum, 12);
      });
  });
});
