export interface Task {
  id: string;
  content: string;
  finished: string;
}

interface dbRes<T> {
  dbStatus: number,
  dbMessage: string,
  data: T
}

export interface GetTaskResponse {
  message: string;
  data: Task[] | dbRes<Task[] >;
}
