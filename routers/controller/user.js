const userModel = require("../../db/module/userModel");
const bcrypt = require("bcrypt");

const getuser = async (req, res) => {
  const user = req.token.userId;
  try {
    const getinfo = await userModel.findOne({ _id: user });
    res.status(200).json(getinfo);
  } catch (err) {
    res.send(err);
  }
};

const updateinfo = async (req, res) => {
  const user = req.token.userId;
  let { name, img, password, bio } = req.body;
  try {
    password = await bcrypt.hash(password, 10);
    console.log(name, img, password);
    const updateinfo = await userModel.findByIdAndUpdate(
      { _id: user },
      { name, img, password, bio },
      { new: true }
    );
    console.log(updateinfo);

    res.status(200).json(updateinfo);
  } catch (err) {
    res.send(err);
  }
};

const removeuser = async (req, res) => {
  const user = req.token.userId;
  try {
    const deleuser = await userModel.findByIdAndDelete({ _id: user });
    res.status(200).json(deleuser);
  } catch (error) {
    res.send(err);
  }
};

module.exports = { getuser, updateinfo, removeuser };
