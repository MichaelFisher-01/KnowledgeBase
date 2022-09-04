// Bringing in the model and datatypes from the sequelize library
const { Model, DataTypes } = require('sequelize');
//Bringing in the database connection informaiton
const sequelize = require('../config/connection');
//Adding Bcrypt to encrypt our database passwords
const bcrypt = require('bcrypt');

//Creating a Model(table) with the name Users
class Users extends Model {}

//Setting parameters of the Users mode
Users.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		userName: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			unqiue: true,
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		hooks: {
			async beforeCreate(newUser) {
				newUser.password = await bcrypt.hash(newUser.password, 7);
				return newUser;
			},
		},
		//Database connection
		sequelize,
		//Timestamp data is not necessary on this table
		timestamps: false,
		//Prevent the model name from automatically becoming plural.
		freezeTableName: true,
		modelName: 'users',
	}
);

//Exporting this model for use in index.js
module.exports = Users;
