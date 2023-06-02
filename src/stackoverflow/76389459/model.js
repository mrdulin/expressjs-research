const { DataTypes } = require("sequelize");

const floatAPIModels = (sequelize) => {
  const Person = sequelize.define(
    "Person",
    {
      people_id: { type: DataTypes.INTEGER, primaryKey: true },
    },
    { timestamps: true, tableName: "Person", }
  );

  return {
    Person,
  };
};

module.exports = floatAPIModels;