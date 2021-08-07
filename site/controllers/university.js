const City = require('../models/city');

exports.postAddUniversity = async (req, res, next) => {
  const cityName = req.body.city;
  const universityName = req.body.university;

  const [city, created] = await City.findOrCreate({
    where: { cityName: cityName },
  }).catch(err => {
    res.status(500).json(err);
  });
  city.createUniversity({ universityName });

  if (created) {
    res.json('university and city created');
  } else {
    res.json('university created');
  }
};

exports.getUniversities = (req, res) => {
  const cityName = req.params.city;
  City.findOne({ where: { cityName } })
    .then(city => {
      if (!city) return [];
      city.getUniversities();
    })
    .then(result => res.json(result))
    .catch(err => res.status(500).json(err));
};
