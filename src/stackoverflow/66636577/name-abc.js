const obj = {
  a: function (cb) {
    return function (err, res) {
      if (err) return cb(err);
      return cb(null, res);
    };
  },
};

module.exports = obj;
