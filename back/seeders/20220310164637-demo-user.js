"use strict";
const bcrypt = require("bcrypt");
const saltRounds = 10;

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "andrey",
          email: "andrey@mail.com",
          password: bcrypt.hashSync("admin", saltRounds),
          role: "ADMIN",
          img: "admin.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "user1",
          email: "user@mail.com",
          password: bcrypt.hashSync("user", saltRounds),
          role: "USER",
          img: "user.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
