const express = require("express");

const router = express.Router();

const aboutControllers = require("../controllers/about");

router.get("/about", aboutControllers.getAbout);

module.exports = router;
