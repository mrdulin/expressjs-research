import { createLogger, format, Logger, transports } from 'winston';

export const logger: Logger = createLogger({
  level: 'debug',
  format: format.combine(format.timestamp(), format.json()),
  transports: [new transports.Console()],
});
