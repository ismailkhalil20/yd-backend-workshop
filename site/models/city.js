const { Sequelize, DataTypes } = require("sequelize");
const db = require("../util/database");
const bcrypt = require("bcrypt");
const { model } = require("../util/database");

const City = db.define(
  "City",
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    cityName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
);

module.exports = City;