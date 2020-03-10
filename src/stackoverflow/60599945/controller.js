let sendOTPOnPhone = require('./sendOTPOnPhone');

module.exports = async function(req, res) {
  const { error, data } = await sendOTPOnPhone(req.query.phone);
  if (error) return res.send(error);
  return res.send(data);
};
