const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  login: {
    type: String,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },
});

const Users = mongoose.model("Users", userSchema);

module.exports = Users;
