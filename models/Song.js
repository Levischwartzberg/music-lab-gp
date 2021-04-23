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
    description: {
      type: DataTypes.STRING,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
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
