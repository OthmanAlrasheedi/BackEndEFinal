const mongoose = require("mongoose");

const coursesModel = new mongoose.Schema({
  name: { type: String },
  Description: { type: String },
  vedios: { type: Array },
  img: { type: String },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "userModel" },
  comment: { type: Array },
});

module.exports = mongoose.model("coursesModel", coursesModel);
