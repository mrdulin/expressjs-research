const { verifyOTP, generateOTP } = require('./OtpService');

const verify = async function(req, res) {
  return generateOTP(req.query.phone);
};

const send = async function(req, res) {
  return verifyOTP(req.query.phone, req.query.otp);
};

module.exports = {
  send,
  verify,
};
