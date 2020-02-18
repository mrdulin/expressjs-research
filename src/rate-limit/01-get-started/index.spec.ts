import http from 'http';
import request from 'request-promise';
import { expect } from 'chai';

import { createServer } from './';

describe('rate-limit', () => {
  describe('#createServer', () => {
    let server: http.Server;
    const baseUrl = 'http://localhost:3000';

    const user = { name: 'test' };
    const options = { method: 'POST', body: user, url: `${baseUrl}/create-user`, json: true };
    before(async () => {
      server = await createServer();
    });

    after(done => {
      server.close(done);
    });

    it('should pass rate limit', async () => {
      const createUserTasks: any[] = [];
      for (let i = 0; i < 2; i++) {
        createUserTasks.push(request(options));
      }
      const actualValue = await Promise.all(createUserTasks);
      const expectValue = ['create user success.', 'create user success.'];
      expect(actualValue).to.deep.equal(expectValue);
    });

    it('should rate limit', async () => {
      const createUserTasks: any[] = [];
      for (let i = 0; i < 5; i++) {
        createUserTasks.push(request(options));
      }

      try {
        await Promise.all(createUserTasks);
      } catch (error) {
        expect(error.message).to.have.string('Too many users created from this IP, please try again after 30 seconds');
      }
    });
  });
});
