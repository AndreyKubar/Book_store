"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class basketbook extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      basketbook.belongsTo(models.basket);
      basketbook.belongsTo(models.book);
    }
  }
  basketbook.init(
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
      modelName: "basketbook",
    }
  );
  return basketbook;
};