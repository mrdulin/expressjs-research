import { CoreOptions, UriOptions } from 'request';
import requestPromise from 'request-promise-native';

export class Client {
  public async post(request: CoreOptions & UriOptions) {
    return requestPromise.post(request);
  }
}
