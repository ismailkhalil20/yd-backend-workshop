const express = require("express");
const passport = require("passport");

const router = express.Router();

const addCityControllers = require("../controllers/addCity");

router.get("/add-city", addCityControllers.getAddCity);
router.post("/add-city", addCityControllers.postAddCity);

module.exports = router;
