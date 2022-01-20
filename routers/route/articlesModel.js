const express = require("express");
const articlesModel = express.Router();

const { addarti, getarti, delarti } = require("../controller/articles");
const { authentication } = require("../midelware/authentication");

articlesModel.post("/articl", authentication, addarti);
articlesModel.get("/articl", authentication, getarti);
articlesModel.delete("/delarti/:id", authentication, delarti);

module.exports = articlesModel;
