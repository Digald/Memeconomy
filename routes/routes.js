const path = require("path");
const express = require("express");
const router = new express.Router();
const passport = require("passport");
const validator = require("validator");
const pagesController = require("../controllers/pagesController");
const usersController = require("../controllers/usersController");

// API GET routes
router.get("/api/pages", pagesController.getPages);

// other routes
/**
 * Validate the sign up form
 *
 * @param {object} payload - the HTTP body message
 * @returns {object} The result of validation. Object contains a boolean validation result,
 *                   errors tips, and a global message for the whole form.
 */
function validateSignupForm(payload) {
  const errors = {};
  let isFormValid = true;
  let message = "";

  if (
    !payload ||
    typeof payload.email !== "string" ||
    !validator.isEmail(payload.email)
  ) {
    isFormValid = false;
    errors.email = "Please provide a correct email address.";
  }

  if (!payload || typeof payload.password != 'string' || payload.password.trim().length < 6) {
    isFormValid = false;
    errors.password = 'Password must have at least 6 characters';
  }

  if (!payload || typeof payload.displayName !== 'string' || payload.name.trim().length === 0) {
    isFormValid = false;
    errors.displayName = 'Please provide your name';
  }

  if (!isFormValid) {
    message = 'Check the form for errors.';
  }

  return {
    success: isFormValid,
    message,
    errors
  };
}

// serve html file for react
router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
