const chai = require('chai');
const chaiHttp = require('chai-http');
const fs = require('fs');
const path = require('path');
const { Readable } = require('stream');
const app = require('./');
chai.use(chaiHttp);

const binaryParser = function (res, cb) {
  res.setEncoding('binary');
  res.data = '';
  res.on('data', function (chunk) {
    res.data += chunk;
  });
  res.on('end', function () {
    cb(null, Buffer.from(res.data, 'binary'));
  });
};

describe('66245355', () => {
  it('should pass', async () => {
    const response = await chai
      .request(app)
      .post('/enrich/json')
      .attach('fileField', path.resolve(__dirname, 'file.jsonl'), 'file.jsonl')
      .set('Content-Type', 'multipart/form-data')
      .buffer()
      .parse(binaryParser);

    const writer = fs.createWriteStream(path.resolve(__dirname, 'enriched.jsonl'));
    Readable.from(response.body.toString()).pipe(writer);
  });
});
