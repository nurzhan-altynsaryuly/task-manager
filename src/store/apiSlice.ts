import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Task } from "../models/Task";

export const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/" }),
  tagTypes: ["tasks"],
  endpoints: (build) => ({
    getTasks: build.query<Task[], void>({
      query: () => "tasks",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "tasks" as const, id })),
              { type: "tasks" as const, id: "LIST" },
            ]
          : [{ type: "tasks" as const, id: "LIST" }],
    }),
    createTask: build.mutation<Task, Partial<Task>>({
      query: (body) => ({
        url: "tasks",
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "tasks", id: "LIST" }],
    }),
    deleteTask: build.mutation<void, number>({
      query: (id) => ({
        url: `tasks/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "tasks", id: "LIST" }],
    }),
    changeTask: build.mutation<Task, Task>({
      query: (todo) => ({
        url: `tasks/${todo.id}`,
        method: "PATCH",
        body: todo,
      }),
      invalidatesTags: [{ type: "tasks", id: "LIST" }],
    }),
  }),
});

export const {
  useGetTasksQuery,
  useCreateTaskMutation,
  useDeleteTaskMutation,
  useChangeTaskMutation,
} = apiSlice;
