const Advertisements = require('./Advertisements');

function SetExample() {}

SetExample.getCandies = async function (url) {
  return 'your real getCandies implementation';
};

SetExample.createCandyBox = function (config) {
  return this.getCandies(config.candyUrl)
    .catch(() => {
      return {};
    })
    .then((candies) => {
      Advertisements.pushCandyBox(config, candies);
    });
};

module.exports = SetExample;
