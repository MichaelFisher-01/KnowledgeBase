//Grabbing the router files from the express library
const router = require('express').Router();
const { Posts, Users } = require('../models');
const authentication = require('../utils/authentication');
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

		const postsInfo = allPosts.map((post) => post.get({ plain: true }));

		res.render('home', { postsInfo });
	} catch (error) {
		res.status(500).json(error);
	}
});

router.get('/profile', authentication, async (req, res) => {
	try {
		const userInfo = await Users.findByPk(req.session.id, {
			attributes: { exclude: ['password'] },
			include: [{ model: Posts }],
		});

		const thisUser = userInfo.get({ plain: true });

		res.render('profile', {
			...thisUser,
			loggedIn: true,
		});
	} catch (error) {
		res.status(500).json(error);
	}
});

// Exporting the router elements of this file for use in Index.js
module.exports = router;
