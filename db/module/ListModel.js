const mongoose = require("mongoose");

const ListModel = new mongoose.Schema({
  name: { type: String },
  Description: { type: String },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "userModel" },

});


module.exports = mongoose.model("ListModel", ListModel);
