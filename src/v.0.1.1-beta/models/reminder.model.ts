import mongoose from "mongoose";
import usersModel from "./users.model";
import pillowsModel from "./pillows.model";

const ReminderSchema = mongoose.Schema;

const Reminder = new ReminderSchema({
  user: {
    type: usersModel,
    required: true,
  },
  pillow: {
    type: pillowsModel,
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

export default mongoose.model("Reminder", Reminder);
