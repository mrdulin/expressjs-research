const simpleCalcs = require('./simpleCalcs')();

module.exports = function() {
  return {
    avg: (listOfNumbers) => {
      console.log('inside test1 avg()');
      return simpleCalcs.sum(listOfNumbers) / listOfNumbers.length;
    },
  };
};
