const express = require("express");
const signUp = express.Router();

const { postSignUp, getsignup } = require("../controller/signUp");
signUp.post("/signup", postSignUp);

module.exports = signUp;
