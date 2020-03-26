import { app } from './server';
import request from 'supertest';
import path from 'path';

describe('52359964', () => {
  it('should pass', () => {
    return request(app)
      .post('/upload')
      .attach('avatar', path.resolve(__dirname, './downloads/5k.jpg'))
      .expect(200);
  });
});
