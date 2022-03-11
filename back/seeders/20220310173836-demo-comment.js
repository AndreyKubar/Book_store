"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "comments",
      [
        {
          answerId: null,
          text: "cool",
          userId: 1,
          bookId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          answerId: null,
          text: "nice",
          userId: 1,
          bookId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          answerId: null,
          text: "perfect",
          userId: 2,
          bookId: 2,
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