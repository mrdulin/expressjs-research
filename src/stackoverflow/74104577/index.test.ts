import nock from 'nock';
import request from 'supertest';


describe('74104577', () => {
  it('should pass', async () => {
    nock('https://accounts.spotify.com/')
      .post('/api/token', {
        grant_type: 'authorization_code',
        code: 'DummyAccessCode',
        redirect_uri: 'http://localhost:3000',
      })
      .reply(201, { access_token: 12345, refresh_token: 67890, expires_in: 3600 });

    const res = await request("https://accounts.spotify.com")
      .post("/api/token")
      .send({
        grant_type: "authorization_code",
        code: "DummyAccessCode",
        redirect_uri: "http://localhost:3000"
      })

    console.log(res.status, res.body)
  });
});
