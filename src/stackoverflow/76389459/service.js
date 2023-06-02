const floatAPIModels = require("./model");

const insertFloatData = async (databaseConnection, endpoint, endpointData) => {
  try {
    const floatModel = floatAPIModels(databaseConnection);
    await databaseConnection.sync();
    if (endpoint === "people") {
      endpointData.forEach(async (record) => {
        await floatModel.Person.upsert(record);
      });
    }
    return true;
  } catch (error) {
    console.log("Unable to insert data into the database:", error);
    return error;
  }
};

module.exports = { insertFloatData }