const express = require("express");

const router = express.Router();

const addUniversityControllers = require("../controllers/University");

router.post("/get-university", addUniversityControllers.getUniversities);
router.post("/add-university", addUniversityControllers.postAddUniversity);

module.exports = router;