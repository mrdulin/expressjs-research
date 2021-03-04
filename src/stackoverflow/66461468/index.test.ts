import { assert } from 'chai';

describe('test', () => {
  it('testcase', (done) => {
    new Promise((res) => {
      console.log('before');
      assert(false);
      console.log('after');

      res(null);
    })
      .then(() => done())
      .catch((err) => done(err));
  });

  it('testcase - 2', (done) => {
    new Promise((res) => {
      console.log('before');
      assert(true);
      console.log('after');

      res(null);
    })
      .then(() => done())
      .catch((err) => done(err));
  });
});
