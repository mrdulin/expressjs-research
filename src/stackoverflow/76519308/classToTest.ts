import { AuthenticationClient } from './auth0';

export class ClassToTest {
  public static getClient(): AuthenticationClient {
    let options = {
      domain: global.myConfig.DOMAIN,
      clientId: global.myConfig.CLIENT,
      clientSecret: global.myConfig.SECRET,
    };
    let auth0 = new AuthenticationClient(options);

    return auth0;
  }
}

export default ClassToTest;
