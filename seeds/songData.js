const { Song } = require('../models');

const songData = [
  {
    title: 'Smokey Eye Joe',
    description: 'This is a toon I came up with while on the toilet! Thank you music lab!',
    user_id:2,
    song_data: '[["1","2","3","4"],["5","6","7","8"],[null,null,"7",null],[null,null,null,"8"]]',
    posted: true
  },
  {
    title: 'I R ROX!',
    description: 'I don\'t have time for this...',
    user_id:3,
    song_data: '[["1","2","3","4"],["5","6","7","8"],[null,null,"7",null],[null,null,null,"8"]]',
    posted: true
  },
  {
    title: 'I miss you grandma Dried Apricot',
    description: 'Quarantine has been tough on us all, don\'t judge.',
    user_id:1,
    song_data: '[["1","2","3","4"],["5","6","7","8"],[null,null,"7",null],[null,null,null,"8"]]',
    posted: true
  },
  {
    title: 'Don\'t put your mouth on my instruments.',
    description: 'I think you know why...',
    user_id: 5,
    song_data: '[["1","2","3","4"],["5","6","7","8"],[null,null,"7",null],[null,null,null,"8"]]',
    posted: true
  },
  {
    title: 'The Marriage of Magpie',
    description: 'I am the REAL Mozart!',
    user_id: 4,
    song_data: '[["1","2","3","4"],["5","6","7","8"],[null,null,"7",null],[null,null,null,"8"]]',
    posted: true
  },
  {
    title: 'I hate little kids that touch things they are not supposed to',
    description: 'You saw what happened!',
    user_id: 5,
    song_data: '[["1","2","3","4"],["5","6","7","8"],[null,null,"7",null],[null,null,null,"8"]]',
    posted: true
  },
];

const seedSongs = () => Song.bulkCreate(songData);

module.exports = seedSongs;
