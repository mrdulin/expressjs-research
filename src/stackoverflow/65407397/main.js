const path = require('path');
const dotenv = require('dotenv').config({ path: path.resolve(__dirname, './.env'), debug: true });

//USER='' node /Users/ldu020/workspace/github.com/mrdulin/expressjs-research/src/stackoverflow/65407397/main.js
//[dotenv][DEBUG] "USER" is already defined in `process.env` and will not be overwritten
