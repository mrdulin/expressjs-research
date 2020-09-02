import express from 'express';
import * as health from '@cloudnative/health-connect';

const app = express();
const port = 3005;
const healthcheck = new health.HealthChecker();

async function livenessPromiseGen() {}
const liveCheck = new health.LivenessCheck('LivenessCheck', livenessPromiseGen);
const upstreamServiceCheck = new health.PingCheck('http://localhost:3000');

healthcheck.registerLivenessCheck(liveCheck);
healthcheck.registerReadinessCheck(upstreamServiceCheck);

app.use('/live', health.LivenessEndpoint(healthcheck));
app.use('/ready', health.ReadinessEndpoint(healthcheck));

app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});
