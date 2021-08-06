const City = require("../models/city");

exports.getCity = async (req, res, next) => {
  const city = await City.findAll();
  console.log(req.city);
  res.json(city);
};

exports.getAddCity = (req, res, next) => {
  res.render("addCity.jsx");
  //name of the file may vary//
};

exports.postAddCity = async (req, res, next) => {
    console.log(req.body);
    const cityName = req.body.cityName;
    const city = City.build({ cityName });
    try {
      await city.save();
      res.json(city);
    } catch (err) {
      res.status(400).send(err);
    }
  };
