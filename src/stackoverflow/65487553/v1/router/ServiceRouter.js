module.exports = (ServiceController) => {
  const router = require('express').Router();
  router.get('/', ServiceController.getAllServices);
  router.get('/:id', ServiceController.getServiceById);
  return router;
};
