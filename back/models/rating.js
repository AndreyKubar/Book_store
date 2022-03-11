"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class rating extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      rating.belongsTo(models.User, { as: "user", foreignKey: "userId" });
      rating.belongsTo(models.book, { as: "book", foreignKey: "bookId" });
    }
  }
  rating.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        foreignKey: true,
      },
      rate: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "rating",
    }
  );
  return rating;
};