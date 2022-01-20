const AddTask = require("../../db/module/ListModel");

const getTask = async (req, res) => {
  user = req.token.userId;
  const username = req.token.username;

  try {
    const coures = await AddTask.find({ user: user });
    res.status(200).json(coures);
  } catch (error) {
    res.send(error);
  }
};

// هنا فنكشن الاضافه

const AddTaske = async (req, res) => {
  const { name, Description } = req.body;
  console.log(name, Description);
  const user = req.token.userId;
  const username = req.token.username;
  try {
    const newCouers = new AddTask({ name, Description, user, username });

    const respnse = await newCouers.save();
    const tasks = await AddTask.find({ user: user });
    res.status(200).json(tasks);
  } catch (error) {
    res.send(error);
  }
};

const deltask = async (req, res) => {
  const user = req.token.userId;
  const { id } = req.params;

  try {
    const removetask = await AddTask.findOneAndRemove({ user: user, _id: id });
    const tasks = await AddTask.find({ user: user });

    res.status(200).json(tasks);
  } catch (error) {
    res.send(error);
  }
};
module.exports = { AddTaske, getTask, deltask };
