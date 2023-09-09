const authRouter = require("./auth.router");
const bookRouter = require("./book.router");
const readRouter = require("./read.router");
const categoryRouter = require("./category.router");
const addAuthorRouter = require("./add-author.router");

module.exports = [
    authRouter,
    bookRouter,
    readRouter,
    categoryRouter,
    addAuthorRouter
];