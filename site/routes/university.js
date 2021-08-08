const express = require('express');
const isAuth = require('../middleware/is-auth');

const router = express.Router();

const universityControllers = require('../controllers/university.js');

router.get('/:city/get-university', universityControllers.getUniversities);
router.post('/add-university', isAuth, universityControllers.postAddUniversity);

module.exports = router;
