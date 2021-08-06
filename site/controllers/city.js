const City = require("../models/city");

exports.getAddCity = async (req, res, next) => {
  const city = await City.findAll();
  console.log(req.city);
  res.send(city);
};

exports.postAddCity = async (req, res, next) => {
  const city = await City.findAll();
  console.log(req.city);
  res.send(city);
};