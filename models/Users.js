import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Users = new Schema({
  name: String
});

const Users = mongoose.model("Users", schema);

export default Users;
