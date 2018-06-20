const connect = require('connect');
const bodyParser = require('body-parser');
const util = require('util');
const formidable = require('formidable');

//使用bodyParser()出现如下提示：
//body-parser deprecated bodyParser: use individual json/urlencoded middlewares bodyParser.js:5:10

//解析json数据, Content-Type为application/json
//使用options.limit限制请求实体的大小，如果超出限制大小，报如下错误：
//Error: request entity too large
//node bodyParser.js & node request.js 用来测试limit
const jsonParser = bodyParser.json({ limit: '1kb' });

//解析application/x-www-form-urlencoded的数据
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const app = connect();

//使用curl测试上传数据(此例包含图片和文本),mac osx环境
//curl -F "image=@/Users/dulin/workspace/node-core/demos/connect/test.png" -F "name=novaline" http://localhost:3000/upload
//output:

/*
{ fields: { name: 'novaline' },
  files:
   { image:
      File {
        domain: null,
        _events: {},
        _eventsCount: 0,
        _maxListeners: undefined,
        size: 214360,
        path: '/var/folders/xw/f55kjr0x697_zd35ytgmwrjh0000gn/T/upload_7aacb07a62a620199c0de7f71890bfbc',
        name: 'test.png',
        type: 'application/octet-stream',
        hash: null,
        lastModifiedDate: 2016-06-14T06:45:04.903Z,
        _writeStream: [Object]
        }
    }
}
*/
app
  .use('/upload', (req, res) => {
    const form = new formidable.IncomingForm();

    form.parse(req, function(err, fields, files) {
      res.writeHead(200, { 'content-type': 'text/plain' });
      res.write('received upload:\n\n');
      res.end(util.inspect({ fields: fields, files: files }));
    });
  })
  .use(urlencodedParser)
  .use(jsonParser)
  .use((req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.statusCode = 200;
    process.stdout.write(`req.body:  ${util.inspect(req.body)}\n`);
    let text = `'user is: ' ${req.body.username}\n`;
    res.end(text);
  })
  .listen(3000);
