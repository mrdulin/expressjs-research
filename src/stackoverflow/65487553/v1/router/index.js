const makeServiceRoutes = require('./ServiceRouter');

const ServiceController = {
  getAllServices(req, res) {
    res.send('getAllServices');
  },
  getServiceById(req, res) {
    res.send('getServiceById');
  },
};

module.exports = (router) => {
  router.use('/services', makeServiceRoutes(ServiceController));
  return router;
};
