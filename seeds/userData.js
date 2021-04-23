const { User } = require('../models');

const userData = [
  {
    username: 'Blossoming Apricot',
    password: '##$(*&#$(*&$(#*&*&$(*YVKJEDRFHE(#)*$',
  },
  {
    username: 'Joe',
    password: '##$(*&#$(*&$(#*&*&$(*YVKJEDRFHE(#)*$',
  },
  {

    username: 'L337 Muzixs',
    password: '##$(*&#$(*&$(#*&*&$(*YVKJEDRFHE(#)*$',
  },
  {
    username: 'MozartWannabe',
    password: '##$(*&#$(*&$(#*&*&$(*YVKJEDRFHE(#)*$',
  },
  {
    username: 'I Toot My Horn',
    password: '##$(*&#$(*&$(#*&*&$(*YVKJEDRFHE(#)*$',
  },
  {
    username: 'Willy Wonka',
    password: '##$(*&#$(*&$(#*&*&$(*YVKJEDRFHE(#)*$',
  },

];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
