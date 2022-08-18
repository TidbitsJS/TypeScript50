import { useEffect, useState } from "react";

import ReminderList from "./components/ReminderList";
import Reminder from "./types/Reminder";
import ReminderService from "./services/reminder";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [reminders, setReminders] = useState<Reminder[]>([]);

  useEffect(() => {
    loadReminders();
  }, []);

  const loadReminders = async () => {
    const reminders = await ReminderService.getReminders();
    setReminders(reminders);
  };

  const removeReminder = (id: number) => {
    const result = reminders.filter((reminder) => reminder.id !== id);
    setReminders(result);
  };

  return (
    <div className="App">
      <ReminderList items={reminders} onRemoveReminder={removeReminder} />
    </div>
  );
}

export default App;
