const Config = global.env.config;

const userController = {
  getUser(req, res) {
    res.json(Config.user);
  },
};

module.exports = userController;
