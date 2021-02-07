const Users = require('./UserModel');

exports.searchAll = (req, res) => {
  Users.findAll((err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || 'Some error occured while retrieving data',
      });
    } else {
      res.send(data);
    }
  });
};
