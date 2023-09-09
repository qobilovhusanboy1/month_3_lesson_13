const {Sequelize} = require("sequelize");

const sequelize = new Sequelize("postgres://postgres:1234@localhost:5432/h2");

module.exports = sequelize;
