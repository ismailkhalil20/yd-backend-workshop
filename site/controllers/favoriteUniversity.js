const FavoriteUniversity = require("../models/favoriteUniversity");
const User = require("../models/user");

exports.getFavoriteUniversity = async (req, res, next) => {
  try {
    const user = await User.findOne({ where: { id: req.userId } });
    const favoriteUniversity = await user.getFavoriteUniversities();
    res.json(favoriteUniversity);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.postAddFavoriteUniversity = async (req, res, next) => {
  try {
    const user = await User.findOne({ where: { id: req.userId } });
    const universityName = req.body.universityName;
    const newUniversity = await user.createFavoriteUniversity({
      universityName,
    });
    res.json(newUniversity);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.deleteFavoriteUniversity = (req, res, next) => {
  User.findOne({ where: { id: req.userId } })
    .then((user) => {
      user
        .getFavoriteUniversities({
          where: { id: req.body.universityId },
        })
        .then((university) => {
          const result = user.removeFavoriteUniversity(university);
          console.log(result);
          res.status(204);
        });
    })
    .then(() => res.send("University is deleted succesfully"))
    .catch((err) => res.status(500).json(err));
};
