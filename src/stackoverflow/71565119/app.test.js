const request = require('supertest');
const sinon = require('sinon');
const proxyquire = require('proxyquire');

describe('POST/users', () => {
  describe('when everything is fine and no errors', () => {
    it('should respond with status 201', async () => {
      const queryInterfaceStub = {
        insert: sinon.stub().resolves(),
      };
      const knexStub = sinon.stub().returns(queryInterfaceStub);
      const KnexStub = sinon.stub().returns(knexStub);
      const KnexApp = proxyquire('./app', {
        knex: KnexStub,
      });
      const res = await request(KnexApp).post('/api/categories').send({
        name: 'from test',
        img_id: 5,
      });
      sinon.assert.match(res.statusCode, 201);
    });
  });

  describe('when There is internal server error', () => {
    it('should respond with status 500', async () => {
      const queryInterfaceStub = {
        insert: sinon.stub().rejects(new Error('fake error')),
      };
      const knexStub = sinon.stub().returns(queryInterfaceStub);
      const KnexStub = sinon.stub().returns(knexStub);
      const KnexApp = proxyquire('./app', {
        knex: KnexStub,
      });
      const res = await request(KnexApp).post('/api/categories').send({});

      sinon.assert.match(res.statusCode, 500);
    });
  });
});
