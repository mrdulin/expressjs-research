const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

chai.use(function(chai, utils) {
  var Assertion = chai.Assertion;
  Assertion.addMethod('convertToStringEqual', function(input) {
    new Assertion(this._obj.toString()).to.equal(input.toString());
  });
});
chai.use(chaiAsPromised);
chai.should();

describe('65418901', () => {
  it('should pass', () => {
    return Promise.resolve(2 + 2).should.eventually.convertToStringEqual(4);
  });
});
