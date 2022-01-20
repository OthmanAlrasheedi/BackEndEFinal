const express = require("express");
const likeCouress = express.Router();

const { Addlike, getlike ,removeLike} = require("../controller/likecoures");
const { authentication } = require("../midelware/authentication");
likeCouress.post("/like/:id", authentication, Addlike);
likeCouress.get("/like", authentication, getlike);
likeCouress.delete("/unlike/:id", authentication, removeLike);

module.exports = likeCouress;
