declare module 'ssestream' {
  import Stream from 'stream';
  export default class SseStream extends Stream.Transform {
    constructor(param: any);
    public pipe(destination: NodeJS.WritableStream, options?: { end?: boolean }): any;
  }
}

declare interface PromiseConstructor {
  allSettled(
    promises: Array<Promise<any>>,
  ): Promise<Array<{ status: 'fulfilled' | 'rejected'; value?: any; reason?: any }>>;
}
