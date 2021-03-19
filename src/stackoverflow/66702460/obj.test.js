const obj = require('./obj');
const bookService = require('./bookService');
const sinon = require('sinon');
const test = require('ava');

test('getBook Error Block', (t) => {
  const res = { error: new Error('network') };
  const stub = sinon.stub(bookService, 'InfoRequest').callsFake((bookName, bookId, method, callback) => {
    callback(res);
  });

  return obj.getBook().catch((res) => {
    t.deepEqual(res.error, res.error);
    sinon.assert.calledWith(stub, 'book', '111', 'GET', sinon.match.func);
  });
});
