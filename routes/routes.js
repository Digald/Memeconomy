const express = require("express");
const router = new express.Router();
const pagesController = require("../controllers/pagesController");
const usersController = require("../controllers/usersController");

// API GET routes
router.get("/api/pages", pagesController.getPages);

// User POST routes
router.post("/signup", usersController.signup);
router.post("/login", usersController.login);


module.exports = router;
