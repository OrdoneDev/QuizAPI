'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('respostas', [
      {
        id_pergunta: 1,
        data: '{"respostas": ["2", "11", "1", "3"]}',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_pergunta: 2,
        data: '{"respostas": ["2", "11", "1", "3"]}',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('respostas', null, {});
  }
};
