//Bringing in the router portion of the express library
const router = require('express').Router();

const userRoutes = require('./userRoutes');

router.use('/user', userRoutes);

module.exports = router;
