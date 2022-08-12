export interface Task {
  id: string;
  content: string;
  finished: string;
}

export interface GetTaskResponse {
  message: string;
  data: Task[];
}
