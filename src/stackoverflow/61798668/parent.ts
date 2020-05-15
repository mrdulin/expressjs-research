import Submodule from './sub-module';

class Parent {
  public parentmethod() {
    let sub = new Submodule();
    let result = sub.submethod();
    return result;
  }
}

export default Parent;
