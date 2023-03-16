const Database = require('./database');
const database = new Database();

module.exports = {
  handler(event, context, callback) {
    event.Records.forEach((record) => {
      const recordDetails = database.getRecordDetails(record);
      console.log("🚀 ~ file: handler.js:8 ~ event.Records.forEach ~ recordDetails:", recordDetails)
    });
  },
};
