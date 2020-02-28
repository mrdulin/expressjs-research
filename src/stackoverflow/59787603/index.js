const awsParameterStore = require('aws-param-store');

async function main() {
  let parameters = await awsParameterStore.getParametersByPath('/foo');
  return parameters;
}

module.exports = main;
