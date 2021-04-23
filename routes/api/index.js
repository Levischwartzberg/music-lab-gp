const router = require('express').Router();

const userRoutes = require('./user-routes');
const songRoutes = require('./song-routes');
const commentRoutes = require('./comment-routes');

router.use('/users', userRoutes);
router.use('/songs', songRoutes);
router.use('/comments', commentRoutes);

module.exports = router;
