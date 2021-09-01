const { doSomething } = require('./fileA');

function doAnotherThing() {
  let anotherThing = 10;
  return anotherThing + doSomething();
}

module.exports = { doAnotherThing };
