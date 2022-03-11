"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.rating, { as: "rating", foreignKey: "userId" });
      User.hasOne(models.basket);
    }
  }
  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      email: { type: DataTypes.STRING, unique: true },
      password: DataTypes.STRING,
      role: { type: DataTypes.STRING, defaultValue: "USER" },
      name: DataTypes.STRING,
      img: DataTypes.STRING,
    },
    {
      sequelize,
      tableName: 'users',
      modelName: "User",
    }
  );
  return User;
};
