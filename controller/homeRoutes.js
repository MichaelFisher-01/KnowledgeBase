//Grabbing the router files from the express library
const router = require('express').Router();
const { Posts, Users } = require('../models');
//Renders the home.handlebars when no parameters follow the site address.
router.get('/', async (req, res) => {
	try {
		const allPosts = await Posts.findAll({
			include: [
				{
					model: Users,
					attributes: ['id', 'userName'],
				},
			],
		});

		if (!allPosts) {
			res.render('home', { loggedIn: req.session.loggedIn });
		} else {
			const postsInfo = allPosts.map((post) => post.get({ plain: true }));
			res.render('home', { postsInfo, loggedIn: req.session.loggedIn });
		}
	} catch (error) {
		res.status(500).json(error);
	}
});
// Exporting the router elements of this file for use in Index.js
module.exports = router;
