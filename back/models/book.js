"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

      book.belongsTo(models.author, { as: "author", foreignKey: "authorId" });
      book.belongsTo(models.genre, { as: "genre", foreignKey: "genreId" });

      book.hasMany(models.rating, { as: "rating", foreignKey: "bookId" });
      book.hasMany(models.comment, { as: "comment", foreignKey: "bookId" });

      book.hasMany(models.basketbook);
      book.hasMany(models.bookinfo);
    }
  }
  book.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: { type: DataTypes.STRING, allowNull: false },
      price: { type: DataTypes.INTEGER, allowNull: false },
      description: { type: DataTypes.STRING, allowNull: false },
      img: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      modelName: "book",
    }
  );
  return book;
};