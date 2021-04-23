const sequelize = require('../connection/deets');
const seedUsers = require('./userData');
const seedSongs = require('./songData');
const seedComments = require('./commentData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();

  await seedSongs();

  await seedComments();

  process.exit(0);
};

seedAll();
