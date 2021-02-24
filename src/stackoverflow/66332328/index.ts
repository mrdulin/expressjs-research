import fs from 'fs';

export class Tailer {
  logFilePath;
  seekFrom;
  lastLines;
  fileSizeInBytes;

  constructor(logFilePath) {
    this.logFilePath = logFilePath;
    this.seekFrom = 0;
    this.lastLines = [];
    this.fileSizeInBytes = 100;
  }

  setupFile(newlinepointer) {
    var bytesToRead = this.fileSizeInBytes - newlinepointer;
    fs.open(this.logFilePath, 'r', (errOpen, fd) => {
      fs.read(fd, Buffer.alloc(bytesToRead), 0, bytesToRead, newlinepointer, (errRead, bytesRead, buffer) => {
        var data = buffer.toString('utf8');
        this.lastLines = data.split('\n');
      });
    });
  }
}
