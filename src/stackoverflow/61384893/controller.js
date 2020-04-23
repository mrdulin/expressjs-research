var k,
  b = 10;

const controller = {
  myFunction: function() {
    k = 'Test failed';
    if (b == 10) {
      k = 'Test Passed';
    }
  },
};

module.exports = controller;
