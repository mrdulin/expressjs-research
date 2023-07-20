const dotenv = require('dotenv');
const path = require('path');

const nodeEnv = process.env.NODE_ENV || '';

dotenv.config({ path: path.resolve(process.cwd(), `.env${nodeEnv ? '.' + nodeEnv : ''}`) });

console.log('process.env.DATABASE_CONNECTION_STRING: ', process.env.DATABASE_CONNECTION_STRING);
