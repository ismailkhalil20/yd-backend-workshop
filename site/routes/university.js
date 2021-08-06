const express = require("express");
const isAuth = require("../middleware/is-auth");

const router = express.Router();

const addUniversityControllers = require("../controllers/University");

router.post("/get-university", addUniversityControllers.getUniversities);
router.post("/add-university", isAuth, addUniversityControllers.postAddUniversity);

module.exports = router;