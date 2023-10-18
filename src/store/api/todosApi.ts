import { createApi } from '@reduxjs/toolkit/query/react';

import { baseQuery } from '@store/api';

import { type Todo } from '@types';

export const todosApi = createApi({
  reducerPath: 'todosApi',
  baseQuery,
  endpoints: (builder) => ({
    getTodos: builder.query<Todo, undefined>({
      query: () => 'todos',
    }),
  }),
});

export const { useGetTodosQuery } = todosApi;
