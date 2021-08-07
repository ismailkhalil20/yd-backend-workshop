const express = require("express");
const isAuth = require("../middleware/is-auth");

const router = express.Router();

const favoriteUniversitiesControllers = require("../controllers/favoriteUniversity");

router.get("/favoriteUniversity", isAuth, favoriteUniversitiesControllers.getFavoriteUniversity);
router.post("/add-favoriteUniversity", isAuth, favoriteUniversitiesControllers.postAddFavoriteUniversity);
router.delete("/delete-favoriteUniversity", isAuth, favoriteUniversitiesControllers.deleteFavoriteUniversity);

module.exports = router;