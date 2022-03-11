"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class genre extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //Genre.hasMany(models.Book, { as: "bookId", foreignKey: "genreId" });
      genre.hasMany(models.book, { foreignKey: "genreId" });
      genre.belongsToMany(models.author, { through: models.authorgenre });
    }
  }
  genre.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "genre",
    }
  );
  return genre;
};