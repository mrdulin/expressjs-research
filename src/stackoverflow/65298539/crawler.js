const rl = require('readline');

const validUrl = {
  isUri(url) {
    return url === 'https://toscrape.com/';
  },
};
const readline = rl.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const requestSiteURL = async function() {
  let url = await new Promise((resolve) => {
    readline.question('Please type url: ', resolve);
  });
  let URL = 'https://toscrape.com/';
  if (validUrl.isUri(url)) {
    readline.close();
    return url;
  } else if (url.toLowerCase() === 'no') {
    url = URL;
    return url;
  } else {
    console.log('Please type in a valid URL (https://toscrape.com/) or type "no" to use base url.');
    return requestSiteURL();
  }
};

module.exports = { requestSiteURL };
