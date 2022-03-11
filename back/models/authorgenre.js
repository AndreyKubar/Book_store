"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class authorgenre extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  authorgenre.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        foreignKey: true,
      },
    },
    {
      sequelize,
      modelName: "authorgenre",
    }
  );
  return authorgenre;
};