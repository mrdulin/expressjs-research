const sinon = require('sinon');
// const Promise = require('bluebird');
global.Promise = require('bluebird');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

chai.should();

// Promise.delay = function (ms, value) {
//   return new Promise((resolve) => setTimeout(() => resolve(value), ms));
// };

describe('test', function () {
  var clock;

  beforeEach(function () {
    clock = sinon.useFakeTimers();
  });

  afterEach(function () {
    clock.restore();
  });

  it('should work', async function () {
    var promise = Promise.delay(10000, 'foo');
    clock.tick(10000);
    await promise.should.eventually.deep.equal('foo');
  });
});
