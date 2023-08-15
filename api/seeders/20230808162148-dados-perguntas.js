'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('perguntas', [
      {
        id_pergunta: 1,
        id_tema: 3,
        foto: null,
        pergunta: 'Quanto que é 1+1',
        resposta_certa: '2',
        banca: 'Inova Brasil',
        concurso: 'Professor de Nivel Superior',
        orgao: 'Prefeitura de Elias Fausto',
        ano: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_pergunta: 2,
        id_tema: 3,
        foto: null,
        pergunta: 'Quanto que é 1+2',
        resposta_certa: '3',
        banca: 'Inova Brasil',
        concurso: 'Professor de Nivel Superior',
        orgao: 'Prefeitura de Elias Fausto',
        ano: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('perguntas', null, {});
  }
};
