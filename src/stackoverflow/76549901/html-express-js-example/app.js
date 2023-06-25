import express from 'express';
import htmlExpress, { staticIndexHandler } from 'html-express-js';
import path from 'path';

const __dirname = path.resolve();
console.log('__dirname: ', __dirname);

const app = express();

app.engine(
  'js',
  htmlExpress({
    includesDir: 'includes',
  }),
);

app.set('view engine', 'js');
app.set('views', `${__dirname}/public`);

app.use(
  staticIndexHandler({
    viewsDir: `${__dirname}/public`,
    notFoundView: 'not-found',
  }),
);

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
