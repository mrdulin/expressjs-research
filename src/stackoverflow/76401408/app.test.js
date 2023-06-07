const request = require('supertest');
const { expect } = require('chai');
const app = require('./app');

const agent = request.agent(app);

describe('76401408', () => {
  it('should pass', async () => {
    const res1 = await agent.get('/');
    expect(res1.headers["set-cookie"]).to.be.match(/connect.sid=/);
    const res2 = await agent.get('/return')
    expect(res2.body).to.be.eql({ userId: 1 })
  });
});