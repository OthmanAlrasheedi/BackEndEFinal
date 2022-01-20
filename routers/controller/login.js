const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../../db/module/userModel");

const postLogin = async (req, res) => {
  let { email, password } = req.body;

  try {
    const user = await userModel.findOne({ email: email });
    if (user) {
      const check = await bcrypt.compare(password, user.password);
      if (check === true) {
        const payload = {
          userId: user._id,
          userName: user.name,
          admin: user.admin,
        };
        const token = jwt.sign(payload, "Love71");
        res.status(200).json({ token, payload });
      } else {
        res.status(403).json("wrong PassWord!");
      }
    } else {
      res.status(404).json("wrong Email!");
    }
  } catch (error) {
    res.send(error);
  }
};

module.exports = { postLogin };
