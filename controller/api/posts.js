//Bringing in the router portion of the express library
const router = require('express').Router();
//Grabbing the Users model that was created in the models folder
const { Posts } = require('../../models');

//Route to create a user
router.post('/create', async (req, res) => {
	try {
		const newPost = await Posts.create({
			postTitle: req.body.postTitle,
			postInfo: req.body.postInfo,
			imageUrl: req.body.imgSrc,
			postCreator: req.session.userId,
		});
		res.status(200).json({ newPost });
	} catch (error) {
		console.log(error);
		res.status(500).json(error);
	}
});

module.exports = router;
