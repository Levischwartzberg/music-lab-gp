const router = require('express').Router();
const { Song, User } = require('../models');
// Import the custom middleware
const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/dashboard');
    return;
  }
  res.render('homeLogin');
});

// GET all songs for community page
router.get('/community', async (req, res) => {
  try {
    const dbSongData = await Song.findAll({
      include: [
        {
          model: User,
        },
      ],
    });

    const songs = dbSongData.map((song) =>
      song.get({ plain: true })
    );

    res.render('community', {
      songs,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/create', async (req, res) => {
  if (!req.session.loggedIn) {
    console.log("You need to login first!")
  }
  if (req.session.loggedIn) {
    res.render('create');
    return;
  }
});

router.get('/dashboard', async (req, res) => {
  try {
    const dbSongData = await Song.findAll({
      where: {user_id: req.session.user_id}
    });
    console.log(req.session.user_id); 

    const songs = dbSongData.map((song) =>
      song.get({ plain: true })
    );

    res.render('dashboard', {
      songs,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one song
// Use the custom middleware before allowing the user to access the specific siong
router.get('/song/:id', withAuth, async (req, res) => {
  try {
    const dbSongData = await Song.findByPk(req.params.id, {
      include: [
        {
          model: User,
        },
        {
          model: Comment,
        },
      ],
    });

    const song = dbSongData.get({ plain: true });
    res.render('song', { gallery, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
