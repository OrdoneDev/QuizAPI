'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class perguntas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  perguntas.init({
    pergunta: DataTypes.STRING(768),
    resposta_certa: DataTypes.STRING(384),
    banca: DataTypes.STRING(255),
    concurso: DataTypes.STRING(255),
    ano: DataTypes.DATE()
  }, {
    sequelize,
    modelName: 'perguntas',
    freezeTableName: true,
  });
  return perguntas;
};