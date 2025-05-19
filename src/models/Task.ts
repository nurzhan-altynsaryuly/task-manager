export interface Task {
  id: number;
  user: string;
  task: string;
  status: "open" | "progress" | "done";
}
