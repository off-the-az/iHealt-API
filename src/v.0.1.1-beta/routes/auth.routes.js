const express = require("express");
const AuthRouter = express.Router();
const UserController = require("../controllers/users.controller");
const jwt = require("jsonwebtoken");

AuthRouter.post("/login", async (req, res) => {
  const UserCon = new UserController();
  const user = await UserCon.readBy({
    login: req.body.login,
    password: req.body.password,
  });

  if (user) {
    const accessToken = jwt.sign(
      { id: user[0]._id },
      process.env.JWT_SECRET_KEY
    );
    user[0].token = accessToken;
    console.log(user);
    await UserCon.updateUser({ _id: user[0]._id }, user[0]);
    return res.status(200).json({
      login: user[0].login,
      token: accessToken,
    });
  }

  return res.status(404).json({ message: "User not found" });
});

module.exports = AuthRouter;