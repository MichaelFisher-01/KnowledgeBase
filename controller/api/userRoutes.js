//Bringing in the router portion of the express library
const router = require('express').Router();
//Grabbing the Users model that was created in the models folder
const { Users } = require('../../models');

//Route to create a user
router.post('/newUser', async (req, res) => {
	try {
		console.log({
			incomingUserName: req.body.userName,
			incomingEmail: req.body.email,
			incomingPass: req.body.password,
		});
		const newUserInfo = await Users.create({
			userName: req.body.userName,
			email: req.body.email,
			password: req.body.password,
		});
		res.status(200).json({ newUserInfo });
	} catch (error) {
		res.status(500).json(error);
	}
});

//Route to log in a user
router.post('/validate', async(req,res) => {
    try {
        const findUser = await Users.findOne({
            where: {
                userName: req.body.userName;
            }
        });

        if (!findUser) {
            res.status(400).json({message: 'Username does not exist'});
            return;
        }

        const passCheck = await findUser.checkPassword(req.body.password);

        if(!passCheck){
            res.status(400).json({message:'Incorrect Log In credentials'});
            return;
        }
    } catch (error) {
        
    }
})

module.exports = router;
