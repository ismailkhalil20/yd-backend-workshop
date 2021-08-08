const about = require('../models/about');

exports.getAbout = (req, res, next) => {
    res.render('about.js');