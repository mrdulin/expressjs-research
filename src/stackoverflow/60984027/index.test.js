'use strict';
const sinon = require('sinon');
const sinonMediator = require('./');
const assert = require('assert');

describe('moduleUnderTest', function() {
  describe('when the secret is 3', function() {
    beforeEach(function() {
      sinon.stub(sinonMediator, 'getSecretNumber').returns(3);
    });
    afterEach(function(done) {
      sinon.restore();
      done();
    });
    it('should be returned with a string prefix', function() {
      const result = sinonMediator.getTheSecret();
      const stubValue = sinonMediator.getSecretNumber();
      assert.equal(stubValue, 3); //this assertion passed
      assert.equal(result, 'The secret was: 3'); //but this assertion failed.
    });
  });
});
