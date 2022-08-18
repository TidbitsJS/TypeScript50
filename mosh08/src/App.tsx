import { useState } from "react";

import ReminderList from "./components/ReminderList";
import Reminder from "./types/Reminder";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [reminders, setReminder] = useState<Reminder[]>([
    {
      id: 1,
      title: "Buy milk",
    },
  ]);

  return (
    <div className="App">
      <ReminderList items={reminders} />
    </div>
  );
}

export default App;
