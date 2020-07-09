import { AuthenticationContext } from './AuthenticationContext';

export function main() {
  const authAuthorityUrl = 'localhost';
  let context = new AuthenticationContext(authAuthorityUrl, true);
  context.acquireTokenWithUsernamePassword();
}
