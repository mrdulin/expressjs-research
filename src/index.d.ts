declare module 'ssestream' {
  import Stream from 'stream';
  export default class SseStream extends Stream.Transform {
    constructor(param: any);
    public pipe(destination: NodeJS.WritableStream, options?: { end?: boolean }): any;
  }
}
