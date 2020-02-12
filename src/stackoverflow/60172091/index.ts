import { Client } from 'pg';

class MyClass {
  async validate(event: any) {
    const user_id = 1;
    const client = new Client();
    await client.connect();

    const result = await client.query(`SELECT * FROM "user" WHERE "user_id" = '${user_id}'`);

    console.log(result);
  }
}

export default MyClass;
