const express = require("express");
const login = express.Router();

const { postLogin, } = require("../controller/login");
login.post("/login", postLogin);


module.exports = login;
