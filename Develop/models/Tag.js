const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model {}

Tag.init(
  {  
    id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    setPrimayKey: true,
    autoIncrement: true,
  },
  tag_Name: {
    type: DataTypes.STRING
    // define columns
    },
  },  
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  },
);

module.exports = Tag;
