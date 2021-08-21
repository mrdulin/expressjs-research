const obj = {
  foo(num) {
    return 5 + num;
  },
  methodToTest() {
    return this.foo(1) + this.foo(2);
  },
};

module.exports = obj;
