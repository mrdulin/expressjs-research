const bDao = new (require('./b'))();

class A {
  async getGuid() {
    console.log('A getGuid');
    let guid = await bDao.getDataFromDb();
    console.log('got guid ' + guid);
    return guid;
  }
}
module.exports = A;
