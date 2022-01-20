// const jwt = require("jsonwebtoken");

// const authration = (req, res, next) => {
//   try {
//     const role = req.headers.authorization.split(" ")[1];
//     const admain = jwt.verify(role, "Love71");
//     req.role = admain;
//     if (admain.admin == true) {
//       next();
//     }
//   } catch (error) {
//     res.status(403);
//     res.send(error);
//   }
// };

// module.exports = { authration };
