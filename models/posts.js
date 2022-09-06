//Grabbing the model files and the different datatypes from the sequilize library
const { Model, DataTypes } = require('sequelize');
//Grabbing the database connection information
const sequelize = require('../config/connection');

//Creating a Model(table) called Posts
class Posts extends Model {}

//Defining the parameters of the Model
Posts.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		postTitle: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		postInfo: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		imageUrl: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		postCreator: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'users',
				key: 'id',
			},
		},
	},
	//model settings
	{
		//Database connection informaiton
		sequelize,
		//Prevents auto pluralization of the name
		freezeTableName: true,
		//Created additional timestamp information in the tabe
		timeStamps: true,
		modelName: 'posts',
	}
);

//Exporting so we can pull this model into index.js
module.exports = Posts;
