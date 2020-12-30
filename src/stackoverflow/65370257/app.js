const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, './views'));

app.get('/', (req, res) => {
  const error = null;
  if (error) {
    console.log(error);
    let err = {
      msg: 'Email Sent failed',
    };
    res.render('home', { err, success: null });
  } else {
    let success = {
      msg: 'Your message was sent, thank you!',
    };
    res.render('home', { success, err: null });
  }
});

app.listen(3000, () => console.log('Server started at http://localhost:3000'));
