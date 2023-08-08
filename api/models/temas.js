'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class temas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  temas.init({
    titulo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'temas',
    freezeTableName: true,
  });
  return temas;
};