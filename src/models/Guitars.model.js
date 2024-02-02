const { Model, DataTypes } = require('sequelize');
const database = require('../db');

class Guitars extends Model {}

Guitars.init(
  {
    guitarId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    modelo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    marca: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tipo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: database,
    modelName: 'guitar',
    timestamps: false,
  }
);

module.exports = Guitars;
