import { config } from 'dotenv';
import path from 'path';

const nodeEnv = process.env.NODE_ENV || '';

config({ path: path.resolve(process.cwd(), `.env${nodeEnv ? '.' + nodeEnv : ''}`) });

console.log('process.env.DATABASE_CONNECTION_STRING: ', process.env.DATABASE_CONNECTION_STRING);
