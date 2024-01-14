const express = require("express");
const UserController = require("../controllers/users.controller");
const router = express.Router();

router.get("/get", async function (req, res, next) {
  try {
    const controller = new UserController();
    res.json(await controller.readAll());
  } catch (err) {
    console.error(
      `Error while getting info from DB Users. Error: `,
      err.message
    );
    next(err);
  }
});

router.get("/get/byId/:id", async function (req, res, next) {
  try {
    let controller = new UserController();
    res.json(await controller.readBy({ _id: req.params["id"] }));
  } catch (err) {
    console.error(
      `Error while getting info from DB Users. Error: `,
      err.message
    );
    next(err);
  }
});

router.get("/get/byName/:username", async function (req, res, next) {
  try {
    let controller = new UserController();
    res.json(await controller.readBy({ name: String(req.params["username"]) }));
  } catch (err) {
    console.error(
      `Error while getting info from DB Users. Error: `,
      err.message
    );
    next(err);
  }
});

router.get("/get/user", async function (req, res, next) {
  if (req.user) {
    return res.status(200).json(req.user);
  } else {
    return res.status(401).json({ message: "Not authorized" });
  }
});

router.post("/add", async function (req, res, next) {
  try {
    let controller = new UserController();
    res.json(await controller.addUser(req.body));
  } catch (err) {
    console.error(
      `Error while creating record in DB Users Error: `,
      err.message
    );
    next(err);
  }
});

router.put("/update/:username", async function (req, res, next) {
  try {
    let controller = new UserController();
    res.json(
      await controller.updateUser({ name: req.params["username"] }, req.body)
    );
  } catch (err) {
    console.error(
      `Error while updating record in DB Users Error: `,
      err.message
    );
    next(err);
  }
});

router.delete("/delete/byId/:id", async function (req, res, next) {
  try {
    let controller = new UserController();
    res.json(await controller.deleteBy({ _id: req.params["id"] }));
  } catch (err) {
    console.error(
      `Error while deleting record in DB Users Error: `,
      err.message
    );
    next(err);
  }
});

router.delete("/delete/byName/:username", async function (req, res, next) {
  try {
    let controller = new UserController();
    res.json(await controller.deleteBy({ name: req.params["username"] }));
  } catch (err) {
    console.error(
      `Error while deleting record in DB Users Error: `,
      err.message
    );
    next(err);
  }
});

module.exports = router;
