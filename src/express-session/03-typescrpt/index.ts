import express from 'express';
import session from 'express-session';
const app = express();

app.set('trust proxy', 1);

app.use(session({
  name: `First_test`,
  secret: 'secret_text',
  saveUninitialized: true,
  resave: true,
  cookie: {
    secure: false,
    maxAge: 960000
  }
}));

declare module 'express-session' {
  interface SessionData {
    user: string;
  }
}

app.post('/login', express.urlencoded({ extended: false }), function (req, res) {
  req.session.user = req.body.user
})