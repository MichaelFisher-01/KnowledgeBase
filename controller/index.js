const router = require('express').Router();

const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.get('/:site', (req, res) => {
	console.log(`Headed to the ${req.params.site} page!`);

	res.render(req.params.site);
});

module.exports = router;
