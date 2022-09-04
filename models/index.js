//Grabbing the different models that were created
const Users = require('./users');
const Posts = require('./posts');

//Linking the models that were created
Users.hasMany(Posts, {
	foreignKey: 'postCreator',
});

//Exporting the Users and Posts models for use in other documents
module.exports = { Users, Posts };
