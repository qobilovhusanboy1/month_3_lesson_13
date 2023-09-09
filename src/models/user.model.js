const {Model, DataTypes} = require("sequelize");
const sequelize = require("../database");

class User extends Model {}

User.init(
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
    phonenumber: {
        type: DataTypes.STRING(40),
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING(64),
        allowNull: false,
    },
    password: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    is_admin: {
      type: DataTypes.BOOLEAN, 
      defaultValue: false 
    }
  },
  {
    createdAt: "created_at",
    updatedAt: "updated_at",
    sequelize,
    tableName: "users",
  }
);

module.exports = User;