const rewire = require('rewire');
const { expect } = require('chai');

describe('61384893', () => {
  it('should pass', () => {
    const controller = rewire('./controller');
    controller.myFunction();
    expect(controller.__get__('k')).to.be.equal('Test Passed');
  });

  it('should pass too', () => {
    const controller = rewire('./controller');
    controller.__set__('b', 1);
    controller.myFunction();
    expect(controller.__get__('k')).to.be.equal('Test failed');
  });
});
