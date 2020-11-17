var sinon = require('sinon');
var assert = require('assert');
var { once } = require('./once');

it('calls the original function', function() {
  var callback = sinon.fake();
  var proxy = once(callback);
  proxy();
  assert(callback.called);
});

it('calls the original function only once', function() {
  var callback = sinon.fake();
  var proxy = once(callback);
  proxy();
  proxy();
  assert(callback.calledOnce);
});
