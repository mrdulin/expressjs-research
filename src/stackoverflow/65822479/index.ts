import { createLogger, format, transports } from 'winston';

const logFormatter = format.printf((info) => {
  let { timestamp, level, stack, message } = info;
  message = stack || message;
  return `${timestamp} ${level}: ${message}`;
});

const logToConsole = createLogger({
  level: 'info',
  format: format.errors({ stack: true }),
  transports: [
    new transports.Console({
      format: format.combine(format.colorize(), format.simple(), format.timestamp(), logFormatter),
    }),
  ],
});

const err = new Error('network');
logToConsole.error(err);
// or
// logToConsole.log('error', err);
