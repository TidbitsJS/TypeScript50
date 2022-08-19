import { Router } from "express";
import Reminder from "../models/reminder";
import {
  CreateReminderDto,
  DeleteReminderDto,
  UpdateReminderDto,
} from "../types/Reminder";

const router = Router();
let reminders: Reminder[] = [];

router.get("/", (req, res) => {
  res.json(reminders);
});

router.post("/", (req, res) => {
  const { title } = req.body as CreateReminderDto;
  const reminder = new Reminder(title);
  reminders.push(reminder);

  res.status(200).json(reminder);
});

router.put("/", (req, res) => {
  const { id, isComplete } = req.body as UpdateReminderDto;
  reminders.forEach((reminder) => {
    if (reminder.id === id) return (reminder.isComplete = isComplete);
  });

  res.status(200).json(`${id} updated`);
});

router.delete("/", (req, res) => {
  const { id } = req.body as DeleteReminderDto;
  const filteredReminders = reminders.filter((reminder) => reminder.id !== id);
  reminders = filteredReminders;

  res.status(200).json(`${id} deleted`);
});

export default router;
