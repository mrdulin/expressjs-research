module.exports = (sqlConnection, models) => {
  return {
    aServiceFunction,
  };

  function aServiceFunction(a, b) {
    models.aModel.update(a);
    sqlConnection.queryAsync(`UPDATE... ${a}`);
  }
};
