class B {
  constructor() {
    console.log('B ctor');
    this.db = require('./connection').getDb();
  }

  async getDataFromDb() {
    console.log('B getDataFromDb');
    let res = null;
    res = await this.db.one('SELECT guid FROM table', ['NONE']);
    return res.guid;
  }
}

module.exports = B;
