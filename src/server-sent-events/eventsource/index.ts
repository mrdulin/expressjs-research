import SseStream from 'ssestream';
import http from 'http';
import express from 'express';
import path from 'path';
import faker from 'faker';

import { logger } from '../../utils';
import { config } from '../../config';

async function main(): Promise<http.Server> {
  const app: express.Application = express();
  app.use(express.static(path.resolve(__dirname, '.')));
  app.use(
    '/node_modules',
    express.static(path.resolve(__dirname, '../../../node_modules'))
  );

  app.get('/sse', (req, res) => {
    logger.info('new connection');

    const sseStream = new SseStream(req);
    sseStream.pipe(res);
    const pusher = setInterval(() => {
      sseStream.write({
        event: 'server-time',
        data: faker.lorem.sentence()
      });
    }, 1000);

    res.on('close', () => {
      logger.info('lost connection');
      clearInterval(pusher);
      sseStream.unpipe(res);
    });
  });

  return app.listen(config.PORT, err => {
    if (err) {
      throw err;
    }
    logger.info(`server ready on http://localhost:${config.PORT}`);
  });
}

main();
