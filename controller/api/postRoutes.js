const router = require('express').Router();
const { NewPost } = require('../../models/');

router.post('/createPost', (req, res) => {
	NewPost.create(req.body).then((NewPost) => {
		res.json(NewPost);
	});
});

module.exports = router;
