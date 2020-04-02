'use strict';
function getSecretNumber() {
  return 44;
}
function getTheSecret() {
  return `The secret was: ${exports.getSecretNumber()}`;
}

exports.getSecretNumber = getSecretNumber;
exports.getTheSecret = getTheSecret;

// That's why stub not working
function require(/* ... */) {
  const module = { exports: {} };

  ((module, exports) => {
    function getSecretNumber() {
      return 44;
    }
    function getTheSecret() {
      return `The secret was: ${getSecretNumber()}`;
    }
    module.exports = {
      getTheSecret,
      getSecretNumber,
    };
  })(module, module.exports);

  return module.exports;
}
