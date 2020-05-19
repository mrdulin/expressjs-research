const CustomError = require('./customError');

const controller = {
  async getUser(req, res, next) {
    try {
      if (!req.user) {
        throw new CustomError('找不到使用者', 404);
      } else {
        // do something
      }
    } catch (err) {
      next(err);
    }
  },
};

module.exports = controller;
