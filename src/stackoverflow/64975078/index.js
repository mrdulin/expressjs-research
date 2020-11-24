const { CloudWatchLogs } = require('aws-sdk');

class MyClass {
  async _getLogs(config, filter) {
    const cwl = new CloudWatchLogs();
    return await cwl
      .filterLogEvents({
        logGroupName: config['group-name'],
        filterPattern: filter,
        logStreamNames: [config['stream-name']],
      })
      .promise();
  }
}

module.exports = { MyClass };
