const router = require('express').Router();

const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.get('/:site', (req, res) => {
	console.log(`Headed to the ${req.params.site} page!`);

	res.render(req.params.site);
});

router.get('/home', (req, res) => {
	imageList = [];
	imageList.push({
		src: './public/reasources/mountains.jpg',
		name: 'mountains',
	});
	imageList.push({
		src: './public/reasources/mountains2.jpg',
		name: 'mountains 2',
	});
	res.render('mountains 2', { imageList: imageList });
	imageList.push({
		src: './public/reasources/mountains3.jpg',
		name: 'mountains3',
	});
	res.render('mountains3', { imageList: imageList });
});

module.exports = router;
