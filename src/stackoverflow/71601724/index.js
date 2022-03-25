const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, './.env'), override: true, debug: true });
console.log(process.env.USER);
