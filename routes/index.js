const path = require('path');
const express = require('express');
const router = express.Router();
const pagesController = require('../controllers/pagesController');


// API routes
router.get('/api/pages', pagesController.getPages);

// serve html file for react
// router.use(function(req, res) {
//     res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

module.exports = router;