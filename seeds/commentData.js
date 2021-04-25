const { Comment } = require('../models');

const commentData = [
  {
    song_id: 2,
    comment: 'Loved this dude!',
    user_id: 2,
    user_name: "joe"
  },
  {
    song_id: 1,
    comment: 'How do you make your fingers work so fast?!?!',
    user_id: 1,
    user_name: 'Blossoming Apricot'
  },
  {
    song_id: 3,
    comment: 'So good.',
    user_id: 5,
    user_name: 'I Toot My Horn'
  },
  {
    song_id: 5,
    comment: 'When is someone going to sign this person?!?!?!',
    user_id: 3,
    user_name: 'L337 Musixs'
  },
  {
    song_id: 4,
    comment: 'Loved this dude!',
    user_id: 5,
    user_name: 'I Toot My Horn'
  },
  {
    song_id: 2,
    comment: 'YES!',
    user_id: 4,
    user_name: 'Mozart Wannabe'
  },
  {
    song_id: 2,
    comment: 'I do not know how you did that with this crappy interface....',
    user_id: 1,
    user_name: 'Blossoming Apricot'
  },

];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
