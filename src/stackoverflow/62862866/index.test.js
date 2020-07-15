const request = require('supertest');
const app = require('./');
const path = require('path');
const { expect } = require('chai');

describe('62862866', () => {
  it('should pass', async () => {
    const picture = path.resolve(__dirname, './test.jpg');
    const response = await request(app)
      .post('/uploads/pics')
      .field('name', 'PicureName')
      .field('number', 'PictureNumber')
      .attach('file', picture);
    expect(response.status).to.be.eq(200);
  });
});
