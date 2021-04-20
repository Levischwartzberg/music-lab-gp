//Post Model
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../connection/deets');

class Song extends Model {}

Song.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    data: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    posted: {
      type: DataTypes.BOOLEAN,
      setDefault: false,
    },
    comments: {
      type: DataTypes.JSON, // We will have to maybe set up a class or something to generate a new object if null.

    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'song',
  }
);

module.exports = Song;
