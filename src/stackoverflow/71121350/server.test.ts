import supertest from 'supertest';
import { app } from './app';
import { server } from './server';

const agent = supertest.agent(app);

describe('server', () => {
  before((done) => {
    server.listen(7890, () => {
      console.log('Test server listening on port: 7890');
      done();
    });
  });
  after((done) => {
    server.close(done);
  });
  it('should pass', () => {
    return agent.get('/heartbeat').expect(200);
  });
});
