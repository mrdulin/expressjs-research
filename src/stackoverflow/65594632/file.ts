const file = {
  async readData(sConn) {
    if (!sConn) {
      throw new Error('READ_SOCK_ERROR');
    }

    let rawData;

    return new Promise((resolve, reject) => {
      sConn.on('data', async (data) => {
        try {
          rawData = data.toString();
          return resolve(rawData);
        } catch (error) {
          return reject(new Error(`Error reading response. Details: ${error.stack}`));
        }
      });
    });
  },
};

export { file };
