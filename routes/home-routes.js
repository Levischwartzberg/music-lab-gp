const router = require('express').Router();
const { Song, User, Comment } = require('../models');
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
  if (!req.session.logged_in) {
    console.log("You need to login first!");
    res.render('homeLogin', {
      success: false
    });
    return;
  }
  if (req.session.logged_in) {
    res.render('create');
    return;
  }
});

router.get('/dashboard', async (req, res) => {
  if (req.session.logged_in) {
    try {
      const dbSongData = await Song.findAll({
        include: 
          {
            model: User,
            attributes: ["username"] 
          },
        where: {user_id: req.session.user_id},
      });
      console.log(dbSongData); 
  
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
  }
  else {
    console.log("You need to login first!");
    res.render('homeLogin', {
      success: false
    });
    return;
  }
});

// GET one song
// Use the custom middleware before allowing the user to access the specific song
router.get('/song/:id', withAuth, async (req, res) => {
  console.log(`\n\n test \n\n`)
  try {
    const dbSongData = await Song.findByPk(req.params.id, {
      include: [
        {
          model: User,
        },
        {
          model: Comment,
          attributes: ["comment", "user_name"],
        },
      ],
    });
    // console.log(dbSongData);

    const song = dbSongData.get({ plain: true });
    // console.log(song);
    res.render('song', { song, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
