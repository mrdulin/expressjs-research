const UrlBuilder = require('./urlBuilder');

function main() {
  const urlString = 'https://stackoverflow.com/';
  const params = {};
  return new UrlBuilder(urlString)
    .buildURL(params)
    .getShortenedURL()
    .then((data) => data);
}

module.exports = main;
