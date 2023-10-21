import { configureStore } from '@reduxjs/toolkit';

import { todosApi, podcastsApi } from '@store/api';

import { themesReducer } from '@features/themes';

export const store = configureStore({
  reducer: {
    theme: themesReducer,
    [todosApi.reducerPath]: todosApi.reducer,
    [podcastsApi.reducerPath]: podcastsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(todosApi.middleware)
      .concat(podcastsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
