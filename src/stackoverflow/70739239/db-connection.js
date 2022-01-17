module.exports = {
  // Your real db connection
  db: {
    collection() {
      return this;
    },
    find() {
      return this;
    },
  },
};
