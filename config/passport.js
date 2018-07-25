const LocalStrategy = require("passport-local").Strategy;
const User = require("../models.Users");

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
        process.nextTick(function() {
          User.findOne({ "local.email": email }, function(err, user) {
            if (err) return done;
            if (user) {
              return done(
                null,
                false,
                req.flash("signupMessage", "That email is already taken.")
              );
            } else {
              // create user
              const newUser = new User();
              newUser.local.email = email;
              newUser.local.password = newUser.gerateHash(password);
              // save user
              newUser.save(function(err) {
                if (err) throw err;
                return done(null, newUsers);
              });
            }
          });
        });
      }
    )
  );
};
