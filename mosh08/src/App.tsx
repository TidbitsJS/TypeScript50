import ReminderList from "./components/ReminderList";
import Reminder from "./types/Reminder";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const reminders: Reminder[] = [{ id: 1, title: "Buy milk" }];

function App() {
  return (
    <div className="App">
      <ReminderList items={reminders} />
    </div>
  );
}

export default App;
