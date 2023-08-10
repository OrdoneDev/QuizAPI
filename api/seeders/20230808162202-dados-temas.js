'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('temas', [
      {
        titulo: 'Pedagogia',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titulo: 'Matematica',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titulo: 'Portugues',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('temas', null, {});
  }
};
