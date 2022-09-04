//Grabbing the router files from the express library
const router = require('express').Router();

//Renders the home.handlebars when no parameters follow the site address.
router.get('/', async (req, res) => {
	try {
		res.render('home');
	} catch (err) {
		res.status(500).json(err);
	}
});

// Exporting the router elements of this file for use in Index.js
module.exports = router;
