interface Task {
  id: string;
  content: string;
  finished: string;
}

interface GetTaskResponse {
  data: Task[];
}

export { GetTaskResponse };
