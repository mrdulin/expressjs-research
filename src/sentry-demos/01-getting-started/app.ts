import express from 'express';
import * as Sentry from '@sentry/node';
import * as Tracing from '@sentry/tracing';

const app = express();

Sentry.init({
  // DSNs are safe to keep public because they only allow submission of new events and related event data; they do not allow read access to any information.
  dsn: 'https://3805eba8cae34e0b9297a36a951b15e2@o1050767.ingest.sentry.io/6758708',
  integrations: [
    // enable HTTP calls tracing
    new Sentry.Integrations.Http({ tracing: true }),
    // enable Express.js middleware tracing
    new Tracing.Integrations.Express({ app }),
  ],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

// RequestHandler creates a separate execution context using domains, so that every
// transaction/span/breadcrumb is attached to its own Hub instance
app.use(Sentry.Handlers.requestHandler());
// TracingHandler creates a trace for every incoming request
app.use(Sentry.Handlers.tracingHandler());

app.use((req, res, next) => {
  const err = new Error('error happened');
  (err as any).status = 401;
  next(err);
});

// All controllers should live here
app.get('/', function rootHandler(req, res) {
  res.end('Hello world!');
});

app.get('/debug-sentry', function mainHandler(req, res) {
  throw new Error('My first Sentry error!');
});

// The error handler must be before any other error middleware and after all controllers
app.use(
  Sentry.Handlers.errorHandler({
    shouldHandleError(error) {
      console.log('error: ', error.status);
      // Capture all 4XX and 500 errors
      if ((error.status && +error.status > 400) || error.status === 500) {
        return true;
      }
      return false;
    },
  }),
);

// Optional fallthrough error handler
app.use(function onError(err, req, res, next) {
  // The error id is attached to `res.sentry` to be returned
  // and optionally displayed to the user for support.
  // console.log('err: ', err)
  res.statusCode = 500;
  res.end(res.sentry + '\n');
});

app.listen(3000, () => console.log('HTTP server started!'));
