const { ClassB } = require('./classB');
const { ClassC } = require('./classC');

class ClassA {
  constructor() {
    this.classB = new ClassB();
    this.classC = new ClassC();
  }

  doSomething() {
    const data = this.classB.getInfo();
    this.classC.processedData(data);
  }
}

module.exports = { ClassA };
