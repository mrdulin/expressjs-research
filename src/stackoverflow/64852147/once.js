function once(fn) {
  var returnValue,
    called = false;
  return function() {
    if (!called) {
      called = true;
      returnValue = fn.apply(this, arguments);
    }

    return returnValue;
  };
}

module.exports = { once };
