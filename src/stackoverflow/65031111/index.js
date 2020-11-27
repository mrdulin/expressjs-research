var request = require('request');
const sql = require('./mysql.js');

var options = {
  method: 'POST',
  url: 'https://api.getgo.com/oauth/v2/token',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization: 'my encode',
    Cookie: '*****',
  },
  form: {
    grant_type: 'refresh_token',
    refresh_token: 'refresh token',
  },
};

request(options, function(error, response, body) {
  let json = JSON.parse(body);

  const { organizer_key, account_key, access_token, refresh_token } = json;
  const akey = account_key;
  const okey = organizer_key;
  var sqlstr = `INSERT INTO credentialkey (accountKey, organizerKey) VALUES (${akey}, ${okey})`;
  sql.query(sqlstr, function(err, result) {
    if (err) throw err;
    console.log('1 record inserted');
  });
});
