import http from 'http';
import { app } from './app';

const server = http.createServer(app);

const PORT = process.env.PORT || 8000;

if (require.main === module) {
  server.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`);
  });
}

export { server };
