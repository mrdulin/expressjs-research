export class MyClass {
  public async get(name: string): Promise<string> {
    if (name === 'test') {
      throw new Error("name is eql 'test'");
    }
    return '';
  }
}
