const { Comment } = require('../models');

const commentData = [
  {
    song_id: 2,
    comment: 'Loved this dude!',
    user_id: 2,
  },
  {
    song_id: 1,
    comment: 'How do you make your fingers work so fast?!?!',
    user_id: 1,
  },
  {
    song_id: 3,
    comment: 'So good.',
    user_id: 5,
  },
  {
    song_id: 5,
    comment: 'When is someone going to sign this person?!?!?!',
    user_id: 3,

  },
  {
    song_id: 4,
    comment: 'Loved this dude!',
    user_id: 5,
  },
  {
    song_id: 2,
    comment: 'YES!',
    user_id: 4,
  },
  {
    song_id: 2,
    comment: 'I do not know how you did that with this crappy interface....',
    user_id: 1,
  },

];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
