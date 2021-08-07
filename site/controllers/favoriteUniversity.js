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

exports.deleteFavoriteUniversity = async (req, res, next) => {
  try {
    const user = await User.findOne({ where: { id: req.userId } });
    const university = await user.getFavoriteUniversities({
      where: { id: req.body.universityId },
    });
    // const university = await FavoriteUniversity.findOne({
    //   where: { id: req.body.universityId, user_id: req.userId },
    // });
    // await university.destroy();
    const result = await user.removeFavoriteUniversity(university);
    console.log(result);
    res.status(204);
  } catch (err) {
    res.status(500).json(err);
  }
};
