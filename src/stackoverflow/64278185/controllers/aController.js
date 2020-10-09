module.exports = (sqlConnection) => {
  return {
    aControllerFunction,
  };

  function aControllerFunction(req, res, next) {
    const aService = require('../services/aService')(sqlConnection, req.models);
    aService.aServiceFunction(req.a, req.b);
  }
};
