const City = require("../models/city");

exports.getUsers = async (req, res, next) => {
  const city = await City.findAll();
  console.log(req.city);
  res.send(city);
};