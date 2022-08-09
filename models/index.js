const User = require("./User");
const Page = require("./Page");

User.hasMany(Page, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Page.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { User, Page };
