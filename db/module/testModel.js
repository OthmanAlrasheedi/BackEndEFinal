const mongoose = require("mongoose");

const testeing = new mongoose.Schema({
  couers: { type: mongoose.Schema.Types.ObjectId, ref: "coursesModel" },
  quiz: { type: Array },
});

module.exports = mongoose.model("testeing", testeing);
// {
//     q: { type: String },
//     s1: { ans: String, Boolean: true },
//     s2: { ans: String, Boolean: false },
//     s3: { ans: String, Boolean: false },
//     s4: { ans: String, Boolean: false },
//   },
