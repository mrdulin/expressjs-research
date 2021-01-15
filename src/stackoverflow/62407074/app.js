const session = require('express-session');
const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cookie = require('cookie');

const Allusers = [{ id: 1, name: 'Admin', username: 'admin', password: 'admin' }];
const MemoryStore = new session.MemoryStore();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    store: MemoryStore,
    name: 'sid',
    resave: false,
    saveUninitialized: false,
    secret: 'secretCode!',

    cookie: {
      httpOnly: false,
      maxAge: 1000 * 60 * 60 * 24 * 30,
      sameSite: true,
    },
  }),
);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);
  if (username && password) {
    const user = Allusers.find((user) => user.username === username && user.password === password);
    console.log(user);
    if (user) {
      req.session.userId = user.id;
      req.session.name = user.name;
      return res.redirect('/');
    }
  }
  res.redirect('/login');
});

io.on('connection', (socket) => {
  const cookieString = socket.request.headers.cookie;
  console.log('cookieString:', cookieString);
  if (cookieString) {
    const cookieParsed = cookie.parse(cookieString);
    console.log('cookieParsed:', cookieParsed);
    if (cookieParsed.sid) {
      const sidParsed = cookieParser.signedCookie(cookieParsed.sid, 'secretCode!');
      console.log(sidParsed);
      MemoryStore.get(sidParsed, (err, session) => {
        if (err) throw err;
        console.log('user session data:', JSON.stringify(session));
        const { userId, name } = session;
        console.log('userId: ', userId);
        console.log('name: ', name);
      });
      console.log('a user connected');
    }
  }
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});
