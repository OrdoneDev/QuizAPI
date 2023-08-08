'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class respostas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  respostas.init({
    resposta: DataTypes.STRING(384)
  }, {
    sequelize,
    modelName: 'respostas',
  });
  return respostas;
};