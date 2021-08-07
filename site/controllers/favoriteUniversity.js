const FavoriteUniversity = require("../models/favoriteUniversity");

exports.getFavoriteUniversity = async (req, res, next) => {

  const favoriteUniversity = await FavoriteUniversity.findAll();
  console.log(req.favoriteUniversity);
  res.json(favoriteUniversity);
};

// exports.getAddCity = (req, res, next) => {
//   res.render("addCity.jsx");
//   //name of the file may vary//
// };

exports.postAddFavoriteUniversity = async (req, res, next) => {
    console.log(req.body);
    const universityName = req.body.universityName;
    const favoriteUniversity = FavoriteUniversity.build({ universityName });
    try {
      await favoriteUniversity.save();
      res.json(favoriteUniversity);
    } catch (err) {
      res.status(400).send(err);
    }
  };

  exports.deleteFavoriteUniversity = async (req, res, next) => {
    FavoriteUniversity.destroy({ where: { id: req.universityId } })
    .then((results) => res.send("Hobby is created succesfully"))
    .catch((err) => console.log(err));

  };