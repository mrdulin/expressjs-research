const axios = require('axios');

exports.getData = async function (req, res, next) {
  const options = {
    method: 'GET',
    headers: {},
    url: 'http://localhost:3000/api',
    params: {},
  };
  await axios(options)
    .then(function (response) {
      res.json(response.data);
    })
    .catch(function (error) {
      if (error && error.response) {
        if (error.response.status === 401) {
          res.status(500).send({ error: true, message: 'There seems to be an issue, please try after sometime' });
        }
      }
    });
};
