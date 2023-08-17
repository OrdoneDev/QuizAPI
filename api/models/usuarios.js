'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class usuarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      usuarios.hasMany(models.questionarios, {
        foreignKey: 'id_usuario'
      })
    }
  }
  usuarios.init({
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    nome: DataTypes.STRING,
    foto: DataTypes.BLOB,
    email: DataTypes.STRING,
    senha: DataTypes.STRING,
    autenticacao: DataTypes.STRING,
    simulados_realizados: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'usuarios',
    freezeTableName: true,
  });
  return usuarios;
};