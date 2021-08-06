const express = require("express");
const passport = require("passport");

const router = express.Router();

const addUniversityControllers = require("../controllers/addUniversity");

router.get("/add-university", addUniversityControllers.getAddUniversity);
router.post("/add-university", addUniversityControllers.postAddUniversity);

module.exports = router;