import http from 'http';
import express from 'express';
import { createTerminus, TerminusOptions, HealthCheckError } from '@godaddy/terminus';

const app = express();
const PORT = process.env.PORT || 3000;
let isUpstreamServiceAvailable = false;
let count = 0;

app.get('/', (req, res) => {
  res.send('ok');
});

const server = http.createServer(app);

// E.g. k8s readiness probe run every 5 seconds.
// This health check function will also check the health every 5 seconds
async function onHealthCheck() {
  count++;
  isUpstreamServiceAvailable = count > 5;
  if (isUpstreamServiceAvailable) {
    console.log('upstream service is available!!');
    if (count > 10) {
      count = 0;
    }
    return;
  }
  throw new HealthCheckError('healthcheck failed', 'upstream service is unavailable');
}

async function onSignal() {
  console.log('server is starting cleanup');
  // start cleanup of resource, like databases or file descriptors
}

async function onShutdown() {
  console.log('cleanup finished, server is shutting down');
}

const options: TerminusOptions = {
  signal: 'SIGINT',
  healthChecks: {
    '/healthcheck': onHealthCheck,
  },
  onSignal,
  onShutdown,
};

createTerminus(server, options);

server.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
