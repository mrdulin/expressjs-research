const baseURL = 'http://localhost:3000';
const config = {};
export class HeaderCreator {
  async getHeaderCreds() {
    const response = await fetch(`${baseURL}/v1/check`, config);
    const { results } = await response.json();
    return results;
  }
}
