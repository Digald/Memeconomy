const mongoose = require("mongoose");
const bcrypt = require("bcrypt-nodejs");
const Schema = mongoose.Schema;

const usersSchema = new Schema({
  email: String,
  displayName: String,
  password: String
});

usersSchema.methods.generateHash = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
}

usersSchema.methods.validPassword = password => {
  return bcrypt.compareSync(password, this.local.password);
}

const Users = mongoose.model("Users", usersSchema);
module.exports = Users;
