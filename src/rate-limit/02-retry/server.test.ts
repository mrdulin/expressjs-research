import { createServer } from './server';
import http from 'http';
import rp from 'request-promise';
import { expect } from 'chai';
import { requestWithExponentialBackoff } from './request-promise-retry';

describe('rate-limit', () => {
  let server: http.Server;
  beforeEach(async () => {
    server = await createServer();
  });
  afterEach((done) => {
    server.close(done);
  });

  describe('02-retry', () => {
    it('should get correct response if QPS = 50', async () => {
      const requests: any[] = [];
      for (let i = 0; i < 50; i++) {
        requests.push(rp('http://localhost:3000/place'));
      }
      const res = await Promise.all(requests);
      expect(res).to.be.lengthOf(50);
      expect(res[0]).to.be.eq('Query place success.');
    });
    it('should throw error if QPS > 50', async () => {
      const requests: any[] = [];
      for (let i = 0; i < 51; i++) {
        requests.push(rp('http://localhost:3000/place'));
      }
      try {
        await Promise.all(requests);
      } catch (error) {
        expect(error.statusCode).to.be.eq(429);
        expect(error.error).to.be.eq('Max QPS = 50');
      }
    });
    it('should partial success if QPS > 50', async () => {
      const requests: any[] = [];
      for (let i = 0; i < 51; i++) {
        requests.push(rp('http://localhost:3000/place'));
      }
      const res = await Promise.all(requests.map((request) => request.catch((err) => err)));
      expect(res).to.be.lengthOf(51);
      const errRes: any = res.find((r) => typeof r !== 'string');
      expect(errRes.statusCode).to.be.eq(429);
      expect(errRes.error).to.be.eq('Max QPS = 50');
    });

    // Change windowMs to 10 * 1000 before run this test
    it.only('should partial success and retry with Exponential Backoff strategy if QPS > 50', async () => {
      const requests: any[] = [];
      for (let i = 0; i < 51; i++) {
        requests.push(requestWithExponentialBackoff('http://localhost:3000/place'));
      }
      const res = await Promise.all(requests.map((request) => request.catch((err) => err)));
      console.log(res, res.length);
      expect(res).to.be.lengthOf(51);
      const errRes: any = res.find((r) => typeof r !== 'string');
      // tslint:disable-next-line: no-unused-expression
      expect(errRes).to.be.undefined;
    }).timeout(200 * 1000);
  });
});
