const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pagesSchema = new Schema({
  number: Number,
  name: String,
  description: String,
  preview: String,
  URI: String
});

const Pages = mongoose.model("Pages", pagesSchema);

module.exports = Pages;
