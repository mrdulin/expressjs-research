import express from 'express';
import session from 'express-session';

const app = express();

app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
  }),
);
app.get('/', (req, res) => {
  const user = { id: '1' };
  req.session.userId = user.id;
});
