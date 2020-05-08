const { MultiAccounts } = require('./some.js');
const Promise = require('bluebird');

let MultiAccountInstance = new MultiAccounts();

const syncEvents = () =>
  Promise.try(() => {
    return MultiAccountInstance.all().then((accounts) => console.log(accounts));
  });

module.exports = syncEvents;
