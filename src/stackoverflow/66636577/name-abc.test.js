const obj = require('./name-abc');
const assert = require('assert');

describe('66636577', () => {
  it('should handle error', () => {
    const callArgs = [];
    const mCallback = (err, res) => {
      callArgs.push([err, res]);
    };
    const mError = new Error('network');
    obj.a(mCallback)(mError);
    assert(callArgs[0][0] === mError && callArgs[0][1] === undefined, 'expect callback to be called with error');
  });

  it('should success', () => {
    const callArgs = [];
    const mCallback = (err, res) => {
      callArgs.push([err, res]);
    };
    const mRes = 'teresa teng';
    obj.a(mCallback)(null, mRes);
    assert(callArgs[0][0] === null && callArgs[0][1] === 'teresa teng', 'expect callback to be called with response');
  });
});
