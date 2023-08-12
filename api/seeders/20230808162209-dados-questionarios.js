'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('questionarios', [
      {
        id_usuario: 1,
        id_pergunta: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_usuario: 1,
        id_pergunta: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('questionarios', null, {});
  }
};
