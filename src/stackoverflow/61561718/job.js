let { fork } = require('child_process');

const log = {
  info: console.info,
};

let sProcess;

const sSyncJob = () => {
  if (!sProcess || sProcess.killed) {
    sProcess = fork('src/services/ssync-process.js');
    sProcess.send({ hello: 'world' });
    sProcess.on('message', (msg) => {
      log.info('Message from child', msg);
    });
    sProcess.on('exit', () => {
      log.info('Child process sProcessJob finished execution');
      sProcess.kill();
    });
  }
};

exports.sSyncJob = sSyncJob;
