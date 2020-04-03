import { Athena } from './athena';

export class QueryService {
  private readonly athena: Athena = new Athena();
  constructor() {}
  public async query(date?: Date) {
    const param = {
      QueryString: this.generateQuery(date),
    };

    return this.athena.startQueryExecution(param).promise();
  }

  private generateQuery(date?: Date): string {
    if (date) {
      return `SELECT * FROM TABLE WHERE date='$date'`;
    } else {
      return `SELECT * FROM TABLE WHERE date='any date'`;
    }
  }
}
