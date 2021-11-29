const sinon = require('sinon');
const axios = require('axios');
const controller = require('./controller');
const producer = require('./Producer');

describe('execute', () => {
  afterEach(() => {
    sinon.restore();
  });
  it('call method to post', async () => {
    sinon.stub(axios, 'post');
    sinon.stub(producer, 'produce');
    const req = { name: 'tina', dob: '2-12-2000', query: { param: 'thunder' } };
    await controller.result(req, {});
    sinon.assert.calledWithExactly(axios.post, '/login', 'tina', '2-12-2000');
    sinon.assert.calledTwice(producer.produce);
  });
});
