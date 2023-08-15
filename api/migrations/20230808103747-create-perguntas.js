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
      id_tema: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'temas', key: 'id_tema' }
      },
      pergunta: {
        type: Sequelize.STRING
      },
      foto: {
        type: Sequelize.BLOB
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
      orgao: {
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