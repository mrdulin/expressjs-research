import { Test } from './test';

export class Consumer {
  public async someFunction(something: Test) {
    const response = await something.fetch();
  }
}
