const addArtical = require("../../db/module/articlesModel");
const userModel = require("../../db/module/userModel");

const getarti = async (req, res) => {
  try {
    const Savearti = await addArtical.find({});
    res.status(200).json(Savearti);
  } catch (error) {
    res.send(error);
  }
};

const addarti = async (req, res) => {
  const { article, name } = req.body;
  const user = req.token.userId;
  const useradmain = await userModel.findOne({ _id: user });
  try {
    if (useradmain.admin == true) {
      const newAdd = new addArtical({ article, user, name });
      const saveAdd = await newAdd.save();
      res.status(200).json(saveAdd);
    } else {
      res.send("your not admin");
    }
  } catch (error) {
    res.send(erroe);
  }
};

const delarti = async (req, res) => {
  const user = req.token.userId;
  const { id } = req.params;
  console.log(user);

  try {
    const useradmin = await userModel.findOne({ _id: user });
    if (user.admin == true) {
      const removetask = await addArtical.findOneAndRemove({
        _id: id,
      });
      const tasks = await addArtical.find({});

      res.status(200).json(tasks);
      console.log(tasks);
    } else {
      res.send("you are not Admin");
    }
  } catch (error) {
    res.send(error);
  }
};

module.exports = { addarti, getarti, delarti };
