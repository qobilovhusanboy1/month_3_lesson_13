const {Model, DataTypes} = require("sequelize");
const sequelize = require("../database");

class Author extends Model {}

Author.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: {
      type: DataTypes.STRING(32),
      allowNull: false,
    },
    last_name: {
        type: DataTypes.STRING(32),
        allowNull: false,
    },
    date_of_birthday: {
        type: DataTypes.STRING(32),
        allowNull: false,
    },
    date_of_death: {
        type: DataTypes.STRING(32),
        defaultValue: "Hali tirik"
    },
    country: {
        type: DataTypes.STRING(32),
        allowNull: false,
    },
    bio: {
      type: DataTypes.TEXT, 
      allowNull: false
    }
  },
  {
    createdAt: "created_at",
    updatedAt: "updated_at",
    sequelize, 
    tableName: "authors",
  }
);

module.exports = Author;