import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Task {
  task: string;
  user: string;
  status: string;
}

interface TasksState {
  tasks: Task[];
}

const initialState: TasksState = {
  tasks: [],
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    createTask(state, action: PayloadAction<Task>) {
      state.tasks.push(action.payload);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    changeStatus(state, action: PayloadAction<Task>) {
      state.tasks = state.tasks.map((task: Task) => {
        if (task.task !== action.payload.task) return task;

        return {
          task: action.payload.task,
          user: action.payload.user,
          status: action.payload.status,
        };
      });
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    deleteTask(state, action: PayloadAction<string>) {
      state.tasks = state.tasks.filter(
        (task: Task) => task.task !== action.payload
      );
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    loadTasks(state) {
      const storedData = localStorage.getItem("tasks");
      const data: Task[] = storedData ? JSON.parse(storedData) : [];
      state.tasks = data;
    },
  },
});

export const { createTask, changeStatus, deleteTask, loadTasks } =
  taskSlice.actions;
export default taskSlice.reducer;
