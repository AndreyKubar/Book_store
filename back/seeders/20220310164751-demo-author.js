"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "authors",
      [
        {
          name: "Эрик Фримен,",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Кайл Симпсон",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Дэвид Флэнаганаркс",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Роберт Мартин",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Дуглас Крокфорд",
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