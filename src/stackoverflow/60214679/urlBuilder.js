class UrlBuilder {
  constructor(url) {
    this.url = url;
  }
  buildURL(params) {
    return this;
  }
  getShortenedURL() {
    return Promise.resolve('real data');
  }
}

module.exports = UrlBuilder;
