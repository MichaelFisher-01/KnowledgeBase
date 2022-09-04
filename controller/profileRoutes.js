const { Posts, Users } = require('../models');
const authentication = require('../utils/authentication');
const router = require('express').Router();

router.get('/', authentication, async (req, res) => {
	try {
		console.log(`LOOKING FOR USER ID: ${req.session.userId}`);
		const userInfo = await Users.findByPk(req.session.userId, {
			attributes: { exclude: ['password'] },
		});

		const currentUser = userInfo.get({ plain: true });

		res.render('profile', {
			...currentUser,
			loggedIn: req.session.loggedIn,
		});
	} catch (error) {
		console.log(error);
	}
});

module.exports = router;
