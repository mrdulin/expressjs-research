export class Class {
  async throwError(parameter) {
    if (!parameter) {
      throw Error('parameter required');
    }
  }
}
