const producer = require('./Producer');
const axios = require('axios');

const result = async function (req, res) {
  const team = 'thunder';
  const link = req.query.param === team ? '/login' : '/search';
  await producer.produce(req, res);
  const result = await axios.post(link, req.name, req.dob);
  await producer.produce(req, res, 'logout');
};

module.exports = { result };
