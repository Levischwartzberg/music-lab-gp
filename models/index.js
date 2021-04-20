const Post = require('./Post');
const User = require('./User');

Post.hasOne(User, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE',
});

Post.belongsTo(User, {
  foreignKey: 'user_id',
});

User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

module.exports = { Post, User };