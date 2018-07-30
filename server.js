require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const morgan = require("morgan");
const passport = require("passport");
// Express specific
const app = express();
const PORT = process.env.PORT || 3001;
// DB Connection
const configDB = require("./config/database.js");
// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(configDB.url);

// Basic express app setup
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve up static assets
app.use(express.static("client/build"));

// Passport setup
app.use(passport.initialize());

// Load passport strategies
const localSignUpStragegy = require('./config/local-signup');
const localLoginStrategy = require('./config/local-login');
passport.use('local-signup', localSignUpStragegy);
passport.use('local-login', localLoginStrategy);

// Pass the authentication check middleware
// const authCheckMiddleware = require('./auth-check');
// app.use('/api', authCheckMiddleware);

// Add routes, both API and view
const routes = require("./routes/routes");
app.use("/", routes);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
