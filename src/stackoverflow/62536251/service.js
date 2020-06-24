const { Model } = require('./models');

function create(attributes) {
  return Model.create(attributes);
}

module.exports = { create };
