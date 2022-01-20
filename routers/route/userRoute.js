const express = require("express");
const user = express.Router();

const {
  getuser,
  updateinfo,
  removeuser,
  
} = require("../controller/user");
const { authentication } = require("../midelware/authentication");
user.get("/user", authentication, getuser);
user.put("/updateuser", authentication, updateinfo);
user.delete("/deleteuser", authentication, removeuser);

module.exports = user;
