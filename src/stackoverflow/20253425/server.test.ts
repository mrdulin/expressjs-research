import { RateLimit } from 'async-sema';
import rp from 'request-promise';
import { expect } from 'chai';
import { createServer } from './server';
import http from 'http';

describe('20253425', () => {
  let server: http.Server;
  beforeEach(async () => {
    server = await createServer();
  });
  afterEach((done) => {
    server.close(done);
  });
  it('should throttle http request per second', async () => {
    const url = 'http://localhost:3000/place';
    const n = 10;
    const lim = RateLimit(3, { timeUnit: 1000 });

    const resArr: string[] = [];
    for (let i = 0; i < n; i++) {
      await lim();
      const res = await rp(url);
      resArr.push(res);
      console.log(`[${new Date().toLocaleTimeString()}] request ${i + 1}, response: ${res}`);
    }

    expect(resArr).to.have.lengthOf(n);
    resArr.forEach((res) => {
      expect(res).to.be.eq('Query place success.');
    });
  });
});
