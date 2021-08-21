const someReturnFunction = require('./someReturnFunction');
const SomeExtendedErrrorClass = require('./SomeExtendedErrrorClass');

module.exports.someMiddleware = async (req, res, next) => {
  const responseData = await someReturnFunction(req);

  if (!responseData || responseData == null) {
    throw new SomeExtendedErrrorClass('stringArg');
  }
  res.send(responseData);
};
