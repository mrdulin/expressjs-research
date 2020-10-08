export class MyClass {
  name: string;
  constructor(name: string) {
    if (typeof name !== 'string') {
      throw new TypeError('expect "string" type for "name" argument');
    }
    this.name = name;
  }
}
