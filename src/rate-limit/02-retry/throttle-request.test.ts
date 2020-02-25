import { createServer } from './server';
import http from 'http';
import async from 'async';
import rp from 'request-promise';
import { expect } from 'chai';
import { RateLimit } from 'async-sema';

describe('throttle request', () => {
  let server: http.Server;
  const url = 'http://localhost:3000/place';
  beforeEach(async () => {
    server = await createServer();
  });
  afterEach((done) => {
    server.close(done);
  });

  it('should wrap request-promise correctly', (done) => {
    async.asyncify(rp)(url, (err, result) => {
      // tslint:disable-next-line: no-unused-expression
      expect(err).to.be.null;
      expect(result).to.be.eq('Query place success.');
      done();
    });
  });

  it.skip('should send request concurrent without throttling', (done) => {
    const requests: string[] = [];
    for (let i = 0; i < 10; i++) {
      requests.push(url);
    }
    const asyncifyRequest = async.asyncify(rp);

    const q = async.queue(asyncifyRequest, 2);
    q.push(requests, (err, result) => {
      if (err) {
        console.log(err.message);
        return;
      }
      console.log('finished processing request. result: ', result);
    });
    q.drain(() => {
      console.log('all requests have been processed');
      done();
    });
    q.push(requests);
  });

  it.skip('should throttle operations', async () => {
    const n = 50;
    const lim = RateLimit(3);
    const start = process.hrtime();

    for (let i = 0; i < n; i++) {
      await lim();
      process.stdout.write('.');
    }
    process.stdout.write('\n');

    const hrt = process.hrtime(start);
    const elapsed = (hrt[0] * 1000 + hrt[1] / 1e6) / 1000;
    const rps = n / elapsed;
    console.log(rps.toFixed(3) + ' req/s');
  }).timeout(60 * 1000);

  it('should throttle http request per second', async () => {
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
