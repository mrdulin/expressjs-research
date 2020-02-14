const User = require('./user');

module.exports = {
  register: async function(req, res) {
    var record = await User.create({
      username: 'kevin chuka',
    });
    return record;
  },
};
