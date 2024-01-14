const mongoose = require('mongoose');

const ReminderSchema = mongoose.Schema;

const Reminder = new ReminderSchema({
  userId: {
    type: Number,
    required: true,
  },
  pillowId: {
    type: Number,
    required: true,
  },
  format: {
    type: String,
    default: false,
  },
  dose: {
    type: Number,
    default: false,
  },
  time: {
    type: String,
    required: true,
  },
  everyday: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Reminder", Reminder);
