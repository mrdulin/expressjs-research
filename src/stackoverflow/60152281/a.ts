export default class A {
  private data!: string;
  constructor(data?: any) {
    if (data !== undefined) {
      this.data = data.stingValue;
    }
  }
}
