import { app, port } from './';
import http from 'http';
import request from 'supertest';

describe('63822664', () => {
  let server: http.Server;
  before((done) => {
    server = app.listen(port, () => {
      console.log('App has started');
      done();
    });
  });
  after((done) => {
    server.close(done);
    console.log('App has closed');
  });
  it('should pass', () => {
    return request(server)
      .get('/')
      .expect(200);
  });
});
