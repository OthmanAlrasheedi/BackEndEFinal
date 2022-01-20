const mongoose = require("mongoose");

const articlesModel = new mongoose.Schema({
  name: { type: String },
  article: { type: String },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "userModel" },
});

module.exports = mongoose.model("articlesModel", articlesModel);
