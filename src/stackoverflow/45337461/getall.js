const Promise = require('bluebird');
const someApiService = require('./someapiservice');
const _ = require('underscore');

function getall(arr) {
  let promises = _.map(arr, function (item) {
    return someApiService(item.id);
  });
  return Promise.all(promises);
}

module.exports = getall;
