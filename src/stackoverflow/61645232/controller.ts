export class TestController {
  static async getTest(req: any, res: any, next: object) {
    console.log('Test');
    const result = { rows: [] };
    res.status(200).json(result.rows);
  }
}
