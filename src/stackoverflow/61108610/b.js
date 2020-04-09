const a = require('./a');

class b {
  constructor() {
    console.log('i am from class b constructor');
  }
  baz() {
    let obj = new a();
    obj.foo();
    console.log('i am from class b baz method');
  }
}

module.exports = b;
