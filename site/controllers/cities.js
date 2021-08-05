const User = require("../models/city");

exports.getCities = async (req, res, next) => {
  const cities = await User.findAll();
  console.log(req.city);
  res.send(cities);
};