const FavoriteUniversity = require("../models/favoriteUniversity");
const User = require("../models/user");

exports.getFavoriteUniversity = async (req, res, next) => {
  try{
  const user = await User.findOne({ where: { id: req.userId } })
  const favoriteUniversity = await user.getFavoriteUniversities();
  res.json(favoriteUniversity);}
  catch (err){
    res.status(500).json(err);
  }
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
    FavoriteUniversity.destroy({ where: { universityName: req.universityName } })
    .then((results) => res.send("Hobby is deleted succesfully"))
    .catch((err) => console.log(err));

  };