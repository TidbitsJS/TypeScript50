import axios from "axios";
import Reminder from "../types/Reminder";

class ReminderService {
  http = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
  });

  async getReminders() {
    const response = await this.http.get<Reminder[]>("/todos");
    return (await response).data;
  }

  async addReminder(title: string) {
    const response = this.http.post<Reminder>("/todos", { title });
    return (await response).data;
  }

  async removeReminder(id: number) {
    const response = await this.http.delete(`/todos/${id}`);
    return response.data;
  }
}

export default new ReminderService();
