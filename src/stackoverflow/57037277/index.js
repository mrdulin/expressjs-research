async function performMaccheckPortbounce(requestBody) {
  return new Promise(async (resolve, reject) => {
    const trunkCheckResult = await performportTrunkCheck(requestBody);

    var isTrunked = trunkCheckResult.toString().match(/switchport mode trunk/);
    console.log('isTrunked -> ' + isTrunked);
    console.log(JSON.stringify(isTrunked));
    if (isTrunked == 'switchport mode trunk') {
      return resolve('ERROR_CODE_INVALID_PORTMODE');
    }
  });
}

async function performportTrunkCheck(requestBody) {
  return new Promise(async (resolve, reject) => {
    var dataOut = [];

    let config = global.sw_config;
    config.hostname = requestBody.hostname;
    let port_number = requestBody.port_number;

    let command = `sh run interface ${port_number}`;
    var conn = new Client();
    conn
      .on('ready', function () {
        console.log('Client :: ready');
        conn.shell(function (err, stream) {
          if (err) throw err;
          stream
            .on('close', function () {
              console.log('Stream :: close trunk');
              console.log(dataOut.toString());
              conn.end();
              return resolve(dataOut.toString());
            })
            .on('data', function (data) {
              dataOut.push(data.toString().split('\r\n'));
              console.log('STDOUT: ' + data);
            })
            .stderr.on('data', function (data) {
              console.log('STDERR: ' + data);
            });
          var response = stream.end(command + '\nexit');
          console.log(response);
        });
      })
      .connect(config);
  });
}

module.exports = { performMaccheckPortbounce, performportTrunkCheck };
