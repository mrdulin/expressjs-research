const Twit = require('twit');
const twitterClient = new Twit({
  consumer_key: 'consumer_key',
  consumer_secret: 'consumer_secret',
  access_token: 'access_token',
  access_token_secret: 'access_token_secret',
});

function updateStatus(params, callback) {
  twitterClient.post('statuses/update', params, function (err, data, response) {
    if (err) {
      console.log(`Error occurred updating status\t${err}`);
    } else {
      console.log(`Posted twitter with id ${data.id_str}`);
    }
  });
}

exports.updateStatus = updateStatus;
