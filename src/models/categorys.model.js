const {Model, DataTypes} = require("sequelize");
const sequelize = require("../database");

class Category extends Model {}

Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(64),
      allowNull: false,
    }
  },
  {
    createdAt: "created_at",
    updatedAt: "updated_at",
    sequelize, 
    tableName: "categorys",
  }
);

module.exports = Category;