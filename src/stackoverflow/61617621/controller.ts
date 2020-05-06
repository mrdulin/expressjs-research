import { ConnectionDB } from './db';

export class Controller {
  static async getTest(req: any, res: any, next: object) {
    console.log('BEGIN -- TestController.getTest');

    let testid = req.params.testid;
    let query = `SELECT * FROM TEST WHERE TEST_ID = :1`;
    let binds: string[] = [testid];

    let result = await ConnectionDB.executeSimpleQuery(query, binds);
    console.log(result);
  }
}
