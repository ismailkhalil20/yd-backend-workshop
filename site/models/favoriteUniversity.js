const { Sequelize, DataTypes } = require("sequelize");
const db = require("../util/database");

const favoriteUniversity = db.define(
  "favoriteUniversity",
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

module.exports = favoriteUniversity;