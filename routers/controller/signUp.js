const userModel = require("../../db/module/userModel");
const bcrypt = require("bcrypt");

//
const postSignUp = async (req, res) => {
  let { name, email, password, admin } = req.body;
  try {
    password = await bcrypt.hash(password, 10);
    // console.log({ name, email, password, LikeCoures: [], admin });
    const newUser = new userModel({
      name,
      email,
      password,
      LikeCoures: [],
      admin: false,
    });
    const response = await newUser.save();
    res.status(201).json(response);
  } catch (error) {
    res.send(error);
  }
};

module.exports = { postSignUp };
