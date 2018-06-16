const mongoose = require("mongoose");
const Pages = require("../models/Pages.js");

exports.getPages = (req, res) => {
  const availablePages = Pages.find();
  console.log(availablePages);
  res.json(availablePages);
};
