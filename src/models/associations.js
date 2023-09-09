const Book = require("./book.model");
const Category = require("./categorys.model");
const Read = require("./reads.model");
const User = require("./user.model");

Category.hasMany(Book, {foreignKey: "category_id"});
Book.belongsTo(Category, {foreignKey: "category_id"});

User.hasMany(Read, {foreignKey: "user_id"});
Read.belongsTo(User, {foreignKey: "user_id"});

Book.hasMany(Read, {foreignKey: "book_id"});
Read.belongsTo(Book, {foreignKey: "book_id"});  