const express = require("express");
const AddTask = express.Router();

const { AddTaske, getTask, deltask } = require("../controller/addTask");
const { authentication } = require("../midelware/authentication");

AddTask.post("/addtaslk", authentication, AddTaske);
AddTask.get("/gettaslk", authentication, getTask);
AddTask.delete("/deletetask/:id", authentication, deltask);
module.exports = AddTask;
