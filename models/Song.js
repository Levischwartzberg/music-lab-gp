//Post Model
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../connection/deets');

class Song extends Model {}

Song.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false

    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    creator_id: {
      type: DataTypes.STRING,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    creator_name: {
      type: DataTypes.STRING,
      references: {
        model: 'user',
        key: 'username',
      },
    },
    song_data: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    posted: {
      type: DataTypes.BOOLEAN,
      setDefault: false,
    }
  },
  {
    sequelize,
    freezeTableName: true,
    timestamps: true,
    underscored: true,
    modelName: 'song',
  }
);

module.exports = Song;
