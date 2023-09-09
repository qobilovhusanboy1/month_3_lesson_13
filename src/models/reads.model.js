const {Model, DataTypes} = require("sequelize");
const sequelize = require("../database");

class Read extends Model {}

Read.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    oqilganmi: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    oqishni_holash: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },    
    oqilmoqda: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
  },
  {
    createdAt: "created_at",
    updatedAt: "updated_at",
    sequelize, 
    tableName: "reads",
  }
);

module.exports = Read;