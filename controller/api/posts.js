//Bringing in the router portion of the express library
const router = require('express').Router();
//Adding Multer to we can accept multipart forms to our routes
const multer = require('multer');
//Adding sharp to adjust the images that get recieved in the multipart forms
const sharp = require('sharp');

//Grabbing the Users model that was created in the models folder
const { Posts } = require('../../models');
// Setting up Multer so we can upload the images
const StorageEngine = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, './public/images');
	},
	filename: (req, file, cb) => {
		cb(null, file.originalname);
	},
});
//Setting up sharp so all images that get uplaod become the same size
const resizeImage = async (file) => {
	try {
		await sharp(`./public/images/${file}`)
			.resize(400, 400)
			.jpeg()
			.toFile(`./public/images/${file}`);
	} catch (error) {
		console.log(error);
	}
};

const imageUpload = multer({ storage: StorageEngine });

//Route to create a user
router.post('/create', imageUpload.single('image'), async (req, res) => {
	try {
		console.log(req.image);
		await resizeImage(`resized ${req.body.imageLocation}`);
		const newPost = await Posts.create({
			postTitle: req.body.postTitle,
			postInfo: req.body.postInfo,
			imageLocation: req.body.imageLocation,
			imageName: req.body.imageName,
			postCreator: req.session.userId,
		});
		res.status(200).json({ newPost });
	} catch (error) {
		console.log(error);
		res.status(500).json(error);
	}
});

router.post('/imageStore', imageUpload.single('image'), async (req, res) => {
	try {
		console.log(req.file);
		await resizeImage(req.body.fileName);
		res.send('Image Storeage Successful');
	} catch (error) {
		console.log(error);
		res.status(500).json(error);
	}
});

module.exports = router;
