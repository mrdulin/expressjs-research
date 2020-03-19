module.exports = function() {
  return {
    sum: (listOfNumbers) => {
      console.log('inside test2 sum()');
      return listOfNumbers.reduce((a, b) => a + b, 0);
    },
  };
};
