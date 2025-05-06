import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: 'apiSlice',
    tagTypes: ['tasks'],
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
    endpoints: (build) => ({
      getTasks: build.query({
        query: () => 'tasks',
        providesTags: (result) =>
          result
            ? [
                ...result.map(({ id }) => ({ type: 'tasks', id })),
                { type: 'tasks', id: 'LIST' },
              ]
            : [{ type: 'tasks', id: 'LIST' }],
      }),
      createTask: build.mutation({
        query: (body) => ({
          url: 'tasks',
          method: 'POST',
          body,
        }),
        invalidatesTags: [{type: 'tasks', id: 'LIST'}]
      }),
      deleteTask: build.mutation({
        query: (id) => ({
          url: `tasks/${id}`,
          method: 'DELETE'
        }),
        invalidatesTags: [{type: 'tasks', id: 'LIST'}]
      }),
      changeTask: build.mutation({
        query: (todo) => ({
          url: `tasks/${todo.id}`,
          method: 'PATCH',
          body: todo,
        }),
        invalidatesTags: [{type: 'tasks', id: 'LIST'}]
      }),
    }),
  })
  

  export const { useGetTasksQuery, useCreateTaskMutation, useDeleteTaskMutation, useChangeTaskMutation } = apiSlice