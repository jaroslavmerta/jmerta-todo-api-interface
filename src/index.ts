export interface TaskIF {
  id?: string;
  content: string;
  finished: number;
}
export interface GetTasksResIF {
  message: string;
  data: TaskIF[];
}
export interface GetTaskResIF {
  message: string;
  data: TaskIF | null;
}
