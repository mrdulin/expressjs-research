import proxyquire from 'proxyquire';
const proxy = proxyquire.noPreserveCache().noCallThru();

describe('62539936', () => {
  it('should pass', async () => {
    const keytarStub = {
      setPassword: () => {
        console.log('MOCKED');
      },
    };
    const foo = proxy('./keytar.service.ts', {
      keytar: keytarStub,
    });
    const credentialsManagerServiceName = 'accountdemo';
    const service = new foo.KeytarService(credentialsManagerServiceName);
    await service.save('DemoAcc', 'eee');
  });
});
