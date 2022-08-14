export interface Task {
  id?: string;
  content: string;
  finished: string;
}

export interface GetTasksResponse {
  message: string;
  data: Task[];
}

export interface GetTaskResponse {
  message: string;
  data: Task;
}
