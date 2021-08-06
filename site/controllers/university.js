const City = require('../models/city');

exports.postAddUniversity = (req, res, next) => {
  const cityName = req.body.city;
  const universityName = req.body.universityName

  City.findOne({ where: { cityName: cityName  } })
    .then((city) => {
      console.log(city);
      if (city) {
        city.createUniversity({ universityName });
      } else {
        const city = City.build({cityName})

        try {
          await city.save();
          city.createUniversity({ universityName });
          res.send("City and University created succesfully");
        } catch (err) {
          res.status(400).send(err);
        }
      }
    })
    .then((results) => res.json("University is created succesfully"))
    .catch((err) => console.log(err));
  };

exports.getUniversities = (req, res, next) => {
  City.findOne({ where: { id: req.body.cityName } })
    .then((city) => city.getUniversity())
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
};