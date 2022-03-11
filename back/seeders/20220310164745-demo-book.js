"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "books",
      [
        {
          name: "book 1",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis, cupiditate quos?",
          price: 769,
          img: "book.png",
          authorId: 1,
          genreId: 1,
          ratingId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "book 2",
          description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis, cupiditate quos?",
          price: 573,
          img: "book.png",
          authorId: 2,
          genreId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "book 3",
          description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis, cupiditate quos?",
          price: 457,
          img: "book.png",
          authorId: 1,
          genreId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "book 4",
          description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis, cupiditate quos?",
          price: 677,
          img: "book.png",
          authorId: 2,
          genreId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "book 5",
          description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis, cupiditate quos?",
          price: 1245,
          img: "book.png",
          authorId: 2,
          genreId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "book 6",
          description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis, cupiditate quos?",
          price: 574,
          img: "book.png",
          authorId: 1,
          genreId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "book 7",
          description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis, cupiditate quos?",
          price: 4647,
          img: "book.png",
          authorId: 2,
          genreId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "book 8",
          description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis, cupiditate quos?",
          price: 325,
          img: "book.png",
          authorId: 1,
          genreId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "book 9",
          description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis, cupiditate quos?",
          price: 4374,
          img: "book.png",
          authorId: 2,
          genreId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "book 10",
          description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis, cupiditate quos?",
          price: 353,
          img: "book.png",
          authorId: 2,
          genreId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      
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