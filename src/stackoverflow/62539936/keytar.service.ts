// @ts-ignore
import keytar from 'keytar';

export class KeytarService {
  private service: string;

  constructor(service: string) {
    this.service = service;
  }

  async save(account: string, password: string): Promise<void> {
    console.log(keytar);
    await keytar.setPassword(this.service, account, password);
  }
}
