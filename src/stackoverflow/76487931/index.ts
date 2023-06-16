//@ts-nocheck
import { OAuth2Client } from 'google-auth-library';
import { google } from 'googleapis';
import http from 'http';
import url from 'url';

const keys = require('../../../.svc/client_secret.json');

const oAuth2Client = new OAuth2Client(keys.web.client_id, keys.web.client_secret, keys.web.redirect_uris[0]);
const authorizeUrl = oAuth2Client.generateAuthUrl({
  access_type: 'offline',
  scope: 'https://www.googleapis.com/auth/userinfo.profile',
});

http
  .createServer(async (req, res) => {
    try {
      if (req.url && req.url.indexOf('/oauth2callback') > -1) {
        const qs = new url.URL(req.url, 'http://localhost:3000').searchParams;
        const code = qs.get('code');
        console.log(`Code is ${code}`);

        const r = await oAuth2Client.getToken(code);
        oAuth2Client.setCredentials(r.tokens);
        console.info('Tokens acquired.');

        const res1 = await oAuth2Client.request({
          url: 'https://www.googleapis.com/oauth2/v3/userinfo',
        });
        console.log('res1.data: ', res1.data);

        const oauth2 = google.oauth2({ version: 'v2', auth: oAuth2Client });
        const res2 = await oauth2.userinfo.get();
        console.log('res2.data', res2.data);

        res.end('Authentication successful! Please return to the console.');
      }
    } catch (e) {
      console.error(e);
    }
  })
  .listen(3000, () => console.log(`Open ${authorizeUrl}`));
