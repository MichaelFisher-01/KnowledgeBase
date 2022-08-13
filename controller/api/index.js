const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRouter = require('./postRoutes');

router.use('/users', userRoutes);
router.use('/newPost', postRouter);


module.exports = router;
