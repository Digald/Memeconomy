const User = require("../models/Users");
const validationFunctions = require('../routes/validation/validationFunctions');
const passport = require("passport");

exports.signup = async (req, res, next) => {
  const validationResult = validationFunctions.validateSignupForm(req.body);
  if (!validationResult.success) {
    return res.status(400).json({
      success: false,
      message: validationResult.message,
      errors: validationResult.errors
    });
  }

  return passport.authenticate("local-signup", err => {
    if (err) {
      if (err.name === "MongoError" && err.code === 11000) {
        // the 11000 Mongo code is for a duplication email error
        // the 409 HTTP status code is for conflict error
        return res.status(409).json({
          success: false,
          message: "Check the form for errors.",
          errors: {
            email: "This email is already taken."
          }
        });
      }
      return res.status(400).json({
        success: false,
        message: "Could not process the form."
      });
    }

    return res.status(200).json({
      success: true,
      message: "You have successfully signed up!"
    });
  })(req, res, next);
};

exports.login = async (req, res, next) => {
  const validationResult = validationFunctions.validateLoginForm(req.body);
  if (!validationResult.success) {
    return res.status(400).json({
      success: false,
      message: validationResult.message,
      errors: validationResult.errors
    });
  }
  return passport.authenticate("local-login", (err, token, userData) => {
    if (err) {
      if (err.name === "IncorrectCredentialsError") {
        return res.status(400).json({
          success: false,
          message: err.message
        });
      }

      return res.status(400).json({
        success: false,
        message: "Could not process the form"
      });
    }

    return res.json({
      success: true,
      message: "You have successfully logged in!",
      token,
      user: userData
    });
  })(req, res, next);
};
