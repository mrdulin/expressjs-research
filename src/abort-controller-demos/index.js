const fetch = require('isomorphic-fetch');
const AbortController = require('abort-controller');

const controller = new AbortController();
const signal = controller.signal;

function beginFetching() {
  var urlToFetch = 'https://httpbin.org/delay/3';

  fetch(urlToFetch, {
    method: 'get',
    signal: signal,
  })
    .then(function (response) {
      console.log(`Fetch complete. (Not aborted)`);
    })
    .catch(function (err) {
      console.error(` Err: ${err}`);
    });
}

function abortFetching() {
  console.log('Now aborting');
  // Abort.
  controller.abort();
}

beginFetching();
setTimeout(() => {
  abortFetching();
}, 1000);
