const { Posts, Users } = require('../models');
const authentication = require('../utils/authentication');
const router = require('express').Router();

router.get('/', authentication, async (req, res) => {
	try {
		const userInfo = await Users.findByPk(req.session.userId, {
			attributes: { exclude: ['password'] },
			include: [{ model: Posts }],
		});

		const currentUser = userInfo.get({ plain: true });
		console.log(currentUser);
		res.render('profile', {
			...currentUser,
			loggedIn: req.session.loggedIn,
		});
	} catch (error) {
		console.log(error);
	}
});

module.exports = router;
