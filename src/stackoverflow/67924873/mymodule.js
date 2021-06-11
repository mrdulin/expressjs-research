function ownHelloWorld() {
  module.exports.calledFunc();
}

function calledFunc() {
  console.log('Hello world');
}

module.exports = {
  ownHelloWorld,
  calledFunc,
};
