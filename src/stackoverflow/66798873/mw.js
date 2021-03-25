const { getEmployerId } = require('./employerApi');

const setEmployerDetails = (employerId) => {
  return (req, res, next) => {
    getEmployerId(req, res, next, employerId);
  };
};

module.exports = setEmployerDetails;
