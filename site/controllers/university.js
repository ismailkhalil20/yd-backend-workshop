const City = require('../models/city');

exports.postAddUniversity = async (req, res, next) => {
  const cityName = req.body.city;
  const universityName = req.body.university

  const [city, created] = await City.findOrCreate({
    where: { cityName: cityName }
  })
  city.createUniversity({ universityName })
  
  if (created) {
    res.json('university and city created')
  } else {
    res.json('university created')
  }

  };

exports.getAddUniversity = (req, res, next) => {
  City.findOne({ where: { id: req.body.cityName } })
    .then((city) => city.getUniversity())
    .then((result) => res.json(result))
    .catch((err) => console.log(err));
};