interface Task {
  id: string;
  content: string;
  finished: string;
}

export interface GetTaskResponse {
  data: Task[];
}
 