const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/Users");

module.exports = function(passport) {
  // used to serialize the user for the session
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  // used to deserialize the user
  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });

  // Local Signup
  passport.use(
    "local-signup",
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
        passReqToCallback: true
      },
      function(req, email, password, done) {
        if (email) email = email.toLowerCase();
        process.nextTick(function() {
          // if the user is not already logged in
          if (!req.user) {
            User.findOne({ "email": email }, function(err, user) {
              // if any errors, return error
              if (err) return done(err);
              // Check to see if user exist with that email
              if (user) {
                return done(
                  null,
                  false,
                  req.flash("signupMessage", "that email is already taken")
                );
              } else {
                // create the user
                const newUser = new User();
                newUser.email = email;
                newUser.password = newUser.generateHash(password);
                newUser.save(function(err) {
                  if (err) return done(err);
                  return done(null, newUser);
                });
              }
            });
          }
        });
      }
    )
  );
};
