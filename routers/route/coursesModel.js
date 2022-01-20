const express = require("express");
const coursesModel = express.Router();

const {
  AddCoures,
  getCoures,
  deleteCoures,
  AddVideo,
  getCouresbyID,
  putCouresbyID,
  delVideo,
  addcomment,
  getcomment,
  delcomment,
} = require("../controller/couress");
const { authentication } = require("../midelware/authentication");

coursesModel.post("/addCoures", authentication, AddCoures);
coursesModel.get("/getCoures", authentication, getCoures);
coursesModel.delete("/deletcures/:id", authentication, deleteCoures);
coursesModel.post("/AddVedio/:id", authentication, AddVideo);
coursesModel.delete("/delVedio/:id/:ele", authentication, delVideo);
coursesModel.get("/getCoures/:id", authentication, getCouresbyID);
coursesModel.put("/putCoures/:id", authentication, putCouresbyID);
coursesModel.post("/addcomment/:id", authentication, addcomment);
coursesModel.get("/addcomment", authentication, getcomment);
coursesModel.put("/delcommen/:id", authentication, delcomment);

module.exports = coursesModel;
