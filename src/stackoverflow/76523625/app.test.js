const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('./app');

chai.use(chaiHttp);
const { expect } = chai;

let agent;

beforeEach(() => {
  agent = chai.request.agent(app);
});

afterEach(() => {
  agent.close();
});

it('should do something', async () => {
  const res = await agent.post('/my-endpoint').send({});
  expect(res).to.have.cookie('my-cookie');
  const res2 = await agent.get('/my-other-endpoint');
  expect(res2).to.have.status(204);
});
