const api = {
  get(url) {
    return 'real result';
  },
};

function getApiResult() {
  return api.get('/test/1');
}

module.exports = { getApiResult };
