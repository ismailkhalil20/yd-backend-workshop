const express = require("express");

const router = express.Router();

const addCityControllers = require("../controllers/city");

router.get("/add-city", addCityControllers.getAddCity);
router.post("/add-city", addCityControllers.postAddCity);

module.exports = router;
