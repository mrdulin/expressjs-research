const express = require('express');

const app = express()
  .use((req, res, next) => {
    //设置单个cookie， https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie
    //1
    // res.setHeader('Set-Cookie', 'name=novaline; max-age=10*1000; HttpOnly;');
    //2
    // res.set({
    //   'Set-Cookie': 'name=angular; max-age=10*1000; HttpOnly;'
    // });

    //设置多个cookie
    const cookieOptions = 'max-age=10 * 1000; HttpOnly;';
    //1
    // res.setHeader('Set-Cookie', [`name=react; ${cookieOptions}`, `age=2; ${cookieOptions}`]);
    //2
    res.set({
      'Set-Cookie': [`name=rxjs; ${cookieOptions}`, `age=2; ${cookieOptions}`]
    });
    next();
  })
  .get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  })
  .get('/cookie', (req, res) => {
    //获取cookie
    //1
    const cookies = req.header('Cookie');
    console.log(cookies);
    console.log(req.get('Cookie'));
    res.send(cookies);
  })
  .listen(5775);
