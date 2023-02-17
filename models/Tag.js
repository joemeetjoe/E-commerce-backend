// requiring the default models from sequelize
const { Model, DataTypes } = require('sequelize');
// requiring the connection file in config
const sequelize = require('../config/connection.js');
// making a tag table
class Tag extends Model {}

Tag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tag_name: {
      type: DataTypes.STRING
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);
// exporting the tag table
module.exports = Tag;
