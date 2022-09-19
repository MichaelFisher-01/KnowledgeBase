const authentication = (req, res, next) => {
	// If the user is not logged in, redirect the request to the login route
	if (!req.session.loggedIn) {
		console.log(req.session);
		res.redirect('/login');
	} else {
		next();
	}
};

module.exports = authentication;
