const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class NewPost extends Model {}

NewPost.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		post_title: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		post_text: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		post_content: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		sequelize,
		timestamps: false,
		freezeTableName: true,
		underscored: true,
		modelName: 'newpost',
	}
);

module.exports = NewPost;
