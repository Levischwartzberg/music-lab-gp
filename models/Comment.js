// Here is where we set up our Dish model, for when we are ready to connect to a database in future activities.

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../connection/deets');

class Comment extends Model {}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    user_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'user',
        key: 'username'
      }
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    timestamps: true,
    modelName: 'comment',
  }
);

module.exports = Comment;
