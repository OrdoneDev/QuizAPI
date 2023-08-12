'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('temas', [
      {
        id_tema: 1,
        titulo: 'Pedagogia',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_tema: 2,
        titulo: 'Matematica',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_tema: 3,
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
