//Bringing in the router portion of the express library
const router = require('express').Router();

const userRoutes = require('./userRoutes');
const postsRoutes = require('./posts.js');

router.use('/user', userRoutes);
router.use('/post', postsRoutes);

module.exports = router;
