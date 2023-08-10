'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('perguntas', {
      id_pergunta: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      pergunta: {
        type: Sequelize.STRING
      },
      resposta_certa: {
        type: Sequelize.STRING
      },
      banca: {
        type: Sequelize.STRING
      },
      concurso: {
        type: Sequelize.STRING
      },
      ano: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('perguntas');
  }
};