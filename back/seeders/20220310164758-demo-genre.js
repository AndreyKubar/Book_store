"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "genres",
      [
        {
          name: "Боевик",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Мистика",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Фантастика",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Детектив",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Роман",
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