const { testee } = require('.');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var expect = chai.expect;
chai.use(chaiAsPromised);

describe('Testing Primises', function () {
  it('should return a particular value ', function () {
    const testPromise = testee();
    return expect(testPromise).to.eventually.equal(777);
  });
});
