const {Model, DataTypes} = require("sequelize");
const sequelize = require("../database");

class Book extends Model {}

Book.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    book_name: {
      type: DataTypes.STRING(32),
      allowNull: false,
    },
    title: {
        type: DataTypes.STRING(128),  
        allowNull: false,
    },
    pages: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    year: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    country: {
      type: DataTypes.TEXT, 
      allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    photo: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    janri: {
        type: DataTypes.STRING(64),
        allowNull: false,
    },
    nashriyot: {
        type: DataTypes.STRING(64),
        allowNull: false,
    },
    qogoz_kitob: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    audio: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    elektron: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
  },
  {
    createdAt: "created_at",
    updatedAt: "updated_at",
    sequelize, 
    tableName: "books",
  }
);

module.exports = Book;

// author_name, category