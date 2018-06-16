const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const morgan = require('morgan');
const routes = require("./routes/index");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(morgan('dev'));

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));

// import models
require('./models/Users.js');
require('./models/Pages.js');
// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/memeconomy");

// Add routes, both API and view
app.get('/api', (req, res) => {
  console.log('api route hit')
  res.json({hello: 'world'});
});
app.use('/', routes);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
