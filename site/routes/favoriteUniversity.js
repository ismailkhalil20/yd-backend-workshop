const express = require("express");

const router = express.Router();

const addFavoriteUniversityControllers = require("../controllers/favoriteUniversity");

router.get("/get-favoriteUniversity", addFavoriteUniversityControllers.getFavoriteUniversity);
router.post("/add-favoriteUniversity", isAuth, addFavoriteUniversityControllers.postAddFavoriteUniversity);
router.delete("/delete-favoriteUniversity", isAuth, addFavoriteUniversityControllers.deleteFavoriteUniversity);

module.exports = router;