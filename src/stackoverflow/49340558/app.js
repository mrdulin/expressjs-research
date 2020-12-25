const app = {
  fibb: function (n) {
    if (n == 1) {
      return 1;
    } else {
      return n * (n - 1);
    }
  },
};

module.exports = app;
