var fibb = require('./app').fibb;
const { assert } = require('chai');

describe('App', function () {
  it('should be 20', function () {
    assert.equal(fibb(5), 20);
  });
  it('should be 1', () => {
    assert.equal(fibb(1), 1);
  });
});
