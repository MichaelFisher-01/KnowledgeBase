//Grabbing just the router files from the express library.
const router = require('express').Router();
//Grabbing the exports from the homeRoutes.js
const homeRoutes = require('./homeRoutes');

//Assignign the homeRoutes information to the router we are going to export.
router.use('/', homeRoutes);

//Exporting the router for use in server.js
module.exports = router;
