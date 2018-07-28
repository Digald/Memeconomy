const path = require("path");
const express = require("express");
const router = express.Router();
const passport = require("passport");
const pagesController = require("../controllers/pagesController");
const usersController = require("../controllers/usersController");

// API GET routes
router.get("/api/pages", pagesController.getPages);

// GET routes
router.get("/logout", usersController.logout);
router.get("/profile", usersController.profile);

// POST routes
router.post(
  "/signup",
  passport.authenticate("local-signup", {
    successRedirect: "/profile",
    failureRedirect: "/login",
    failureFlash: true
  })
);
router.post("/login", usersController.login);

// serve html file for react
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

function isLoggedIn(req, res, next) {
  if (req.isAuthenicated()) return next();
  res.redirect("/");
}
module.exports = router;
