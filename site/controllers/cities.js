const City = require("../models/city");

exports.getCities = async (req, res, next) => {
  const cities = await City.findAll();
  console.log(req.city);
  res.json(cities);
};