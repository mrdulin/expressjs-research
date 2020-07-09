export class AuthenticationContext {
  constructor(private url: string, private flag: boolean) {}
  public acquireTokenWithUsernamePassword() {
    console.log('real implementation');
  }
}
