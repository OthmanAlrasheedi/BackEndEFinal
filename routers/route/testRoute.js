const express = require("express");
const Test = express.Router();

const { gettest, addtest, deltest } = require("../controller/testing");
const { authentication } = require("../midelware/authentication");

Test.post("/addtset/:id", authentication, addtest);
Test.get("/gettset/:id", authentication, gettest);
Test.put("/deltset/:id/:/i", authentication, deltest);

module.exports = Test;
