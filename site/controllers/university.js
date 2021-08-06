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

exports.getUniversities = (req, res, next) => {
  const cityName = req.body.city
  console.log(cityName)
  City.findOne({ where: { cityName } })
    .then((city) => city.getUniversities())
    .then((result) => res.json(result))
    .catch((err) => console.log(err));
};