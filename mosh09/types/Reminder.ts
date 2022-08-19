interface CreateReminderDto {
  title: string;
}

interface DeleteReminderDto {
  id: number;
}

interface UpdateReminderDto {
  id: number;
  isComplete: boolean;
}

export { CreateReminderDto, DeleteReminderDto, UpdateReminderDto };
