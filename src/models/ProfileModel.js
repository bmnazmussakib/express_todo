const mongoose = require("mongoose");

const dataSchema = mongoose.Schema({
  name: { type: String },
  username: { type: String, unique: true },
  password: { type: String },
  email: { type: String },
  city: { type: String },
  mobile: { type: String },
});

const ProfileModel = mongoose.model("Profile", dataSchema);

module.exports = ProfileModel;
