const router = require('express').Router();
const { Song } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  console.log(`\n\n test \n\n`)
  console.log(req.body)
  try {
    const newSong = await Song.create({
      title: req.body.title,
      description: req.body.description,
      song_data: req.body.data,
      user_id: req.session.user_id,
    });

    res.status(200).json(newSong);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', withAuth, async (req, res) => {
  try {
    const updatedSong = await Song.update({
      ...req.body,
      user_id: req.session.user_id},
        {where: {
          id: req.params.id,
        },
    });

    res.status(200).json(updatedSong);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const killSong = await Song.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!postData) {
      res.status(404).json({ message: 'No post found with this id!' });
      return;
    }

    res.status(200).json(killSong);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
