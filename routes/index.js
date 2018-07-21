const path = require('path');
const express = require('express');
const router = express.Router();
const pagesController = require('../controllers/pagesController');
const usersController = require('../controllers/usersController');


// API GET routes
router.get('/api/pages', pagesController.getPages);

// POST routes
router.post('/signup', usersController.signup);
router.post('/login', usersController.login);


// serve html file for react
router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;