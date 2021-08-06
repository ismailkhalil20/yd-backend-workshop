const { Sequelize, DataTypes } = require("sequelize");
const db = require("../util/database");

const University = db.define(
  "Universities",
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    universityName: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    freezeTableName: true,
  }
);

module.exports = University;