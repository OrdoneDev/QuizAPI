'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class questionarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      questionarios.belongsTo(models.perguntas, {
        foreignKey: 'id_pergunta'
      })
      questionarios.belongsTo(models.usuarios, {
        foreignKey: 'id_usuario'
      })
    }
  }
  questionarios.init({

  }, {
    sequelize,
    modelName: 'questionarios',
    freezeTableName: true,
  });
  return questionarios;
};