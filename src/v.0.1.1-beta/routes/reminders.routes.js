const express = require("express");
const ReminderController = require("../controllers/reminder.controller");
const router = express.Router();

router.get('/get', async function(req, res, next) {
  try {
    const controller = new ReminderController(); 
    res.json(await controller.readAll());
  } catch (err) {
    console.error(`Error while getting info from DB Reminders. Error: `, err.message);
    next(err);
  }
});

router.get('/get/byId/:id', async function(req, res, next) {
  try {
    let controller = new ReminderController(); 
    res.json(await controller.readBy({_id: req.params['id'] }));
  } catch (err) {
    console.error(`Error while getting info from DB Reminders. Error: `, err.message);
    next(err);
  }
});

router.get('/get/byName/:Remindername', async function(req, res, next) {
  try {
    let controller = new ReminderController();
    res.json(await controller.readBy({name: String(req.params['Remindername']) }));
  } catch (err) {
    console.error(`Error while getting info from DB Reminders. Error: `, err.message);
    next(err);
  }
});

router.post('/add', async function(req, res, next) {
  try {
    let controller = new ReminderController(); 
    res.json(await controller.addReminder(req.body));
  } catch (err) {
      console.error(`Error while creating record in DB Reminders Error: `, err.message);
      next(err);
  }
});

router.put('/update/:Remindername', async function(req, res, next) {
  try {
    let controller = new ReminderController(); 
    res.json(await controller.updateReminder({name: req.params["Remindername"]}, req.body));
  } catch (err) {
      console.error(`Error while updating record in DB Reminders Error: `, err.message);
      next(err);
  }
});

router.delete('/delete/byId/:id', async function(req, res, next) {
  try {
    let controller = new ReminderController(); 
    res.json(await controller.deleteBy({_id: req.params["id"]}));
  } catch (err) {
      console.error(`Error while deleting record in DB Reminders Error: `, err.message);
      next(err);
  }
});

router.delete('/delete/byName/:Remindername', async function(req, res, next) {
  try {
    let controller = new ReminderController(); 
    res.json(await controller.deleteBy({name: req.params["Remindername"]}));
  } catch (err) {
      console.error(`Error while deleting record in DB Reminders Error: `, err.message);
      next(err);
  }
});

module.exports = router;