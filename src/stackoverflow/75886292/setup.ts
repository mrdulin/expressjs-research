import { UtilService } from './services/utiService';

declare global {
  namespace NodeJS {
    interface Global {
      UtilService: typeof UtilService
    }
  }
}

global.UtilService = UtilService;

