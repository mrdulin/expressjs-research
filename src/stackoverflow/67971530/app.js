const express = require('express');
const app = express();

app.get('/register', function (req, res) {
  res.json({
    state: true,
    msg: 'Register endpoint',
    data: {
      username: 'Swarup',
      email: 'abc@gmail.com',
      password: 'P@1234',
      fullName: 'Swarup Default',
    },
  });
});

if (require.main === module) {
  app.listen(3000, () => {
    console.log('started');
  });
}

module.exports = app;
