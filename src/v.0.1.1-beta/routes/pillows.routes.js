const express = require("express");
const PillowController = require("../controllers/pillows.controller");
const router = express.Router();

router.get('/get', async function(req, res, next) {
  try {
    const controller = new PillowController(); 
    res.json(await controller.readAll());
  } catch (err) {
    console.error(`Error while getting info from DB Pillows. Error: `, err.message);
    next(err);
  }
});

router.get('/get/byId/:id', async function(req, res, next) {
  try {
    let controller = new PillowController(); 
    res.json(await controller.readBy({_id: req.params['id'] }));
  } catch (err) {
    console.error(`Error while getting info from DB Pillows. Error: `, err.message);
    next(err);
  }
});

router.get('/get/byName/:Pillowname', async function(req, res, next) {
  try {
    let controller = new PillowController();
    res.json(await controller.readBy({name: String(req.params['Pillowname']) }));
  } catch (err) {
    console.error(`Error while getting info from DB Pillows. Error: `, err.message);
    next(err);
  }
});

router.post('/add', async function(req, res, next) {
  try {
    let controller = new PillowController(); 
    res.json(await controller.addPillow(req.body));
  } catch (err) {
      console.error(`Error while creating record in DB Pillows Error: `, err.message);
      next(err);
  }
});

router.put('/update/:Pillowname', async function(req, res, next) {
  try {
    let controller = new PillowController(); 
    res.json(await controller.updatePillow({name: req.params["Pillowname"]}, req.body));
  } catch (err) {
      console.error(`Error while updating record in DB Pillows Error: `, err.message);
      next(err);
  }
});

router.delete('/delete/byId/:id', async function(req, res, next) {
  try {
    let controller = new PillowController(); 
    res.json(await controller.deleteBy({_id: req.params["id"]}));
  } catch (err) {
      console.error(`Error while deleting record in DB Pillows Error: `, err.message);
      next(err);
  }
});

router.delete('/delete/byName/:Pillowname', async function(req, res, next) {
  try {
    let controller = new PillowController(); 
    res.json(await controller.deleteBy({name: req.params["Pillowname"]}));
  } catch (err) {
      console.error(`Error while deleting record in DB Pillows Error: `, err.message);
      next(err);
  }
});

module.exports = router;