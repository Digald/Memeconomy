const path = require('path');
const express = require('express');
const router = express.Router();

router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"), {hello: world});
});

module.exports = router;