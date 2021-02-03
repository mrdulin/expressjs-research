declare global {
  namespace Express {
    export interface Response {
      successful(object?: any): this;
    }
  }
}

export {};
