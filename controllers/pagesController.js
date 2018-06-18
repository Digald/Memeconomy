const mongoose = require("mongoose");
const Pages = require("../models/Pages.js");

exports.getPages = async (req, res) => {
  const availablePages = await Pages.find();
  // console.log(availablePages);
  res.json(availablePages);
};
