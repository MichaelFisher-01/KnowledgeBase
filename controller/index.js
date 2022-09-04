//Grabbing just the router files from the express library.
const router = require('express').Router();
//Grabbing the exports from the homeRoutes.js
const homeRoutes = require('./homeRoutes');
//Grabbing the login routes that were created
const loginRoutes = require('./loginRoutes');
//Grabbing all the routes in the API folder (these should handle database changes)
const api = require('./api');

//Assignign the homeRoutes to the address followed by no information
router.use('/', homeRoutes);
//Assigning the loginRoutes information to the address followed by /login
router.use('/login', loginRoutes);
//Assigning the api routes to the address followed by /api
router.use('/api', api);

//Exporting the router for use in server.js
module.exports = router;
