const express = require("express");

const router = express.Router();

const addUniversityControllers = require("../controllers/University");

router.get("/add-university", addUniversityControllers.getAddUniversity);
router.post("/add-university", addUniversityControllers.postAddUniversity);

module.exports = router;