const service = require('./service');

exports.create = (req, reply) => {
  const attributes = req.body;
  service
    .create(attributes)
    .then((result) => {
      reply.code(201).send(result);
    })
    .catch((error) => {
      reply.send(error);
    });
};
