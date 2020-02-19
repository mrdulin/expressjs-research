import { createServer } from './';
import request from 'supertest';

describe('60286487', () => {
  let server;
  beforeEach(() => {
    server = createServer();
  });
  afterEach((done) => {
    server.close(done);
  });
  it('should pass', (done) => {
    const buf = Buffer.alloc(1024 * 1024, '.');
    request(server)
      .post('/')
      .send(buf.toString())
      .set('Content-Type', 'text/plain')
      .set('Content-Length', buf.byteLength.toString())
      .expect(200, done);
  });
});
