const baseURL = 'http://localhost:3000';

export class Foo {
  private _names: any[] = [];

  constructor(private _accessToken: string, private _environment: string) {}

  async getInclusiveData() {
    const config = { method: 'post', headers: {} };
    const response = await fetch(`${baseURL}/v1/variations/match`, config);
    const { results } = (await response.json()) as any;
    this._names = results;
    return this._names;
  }
}
