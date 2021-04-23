const Song = require('./Song');
const User = require('./User');
const Comment = require('./Comment');

Song.belongsTo(User, {
  foreignKey: 'user_id',
});
Comment.belongsTo(Song, {
  foreignKey: 'song_id',
});

User.hasMany(Song, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Song.hasMany(Comment, {
  foreignKey: 'song_id',
  onDelete: 'CASCADE',
});

module.exports = { Song, User, Comment };