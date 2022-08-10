const router = require('express').Router();

router.POST('/postGen', (req, res) => {
	input = req.body;
	res.send(`Recieved the following: ${input}`);
});
