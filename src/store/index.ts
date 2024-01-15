import { configureStore } from '@reduxjs/toolkit';

import { PodcastReducer } from '@pages/Home/components';

import { todosApi, podcastsApi } from '@store/api';

import { themesReducer } from '@features/themes';

export const store = configureStore({
  reducer: {
    theme: themesReducer,
    podcasts: PodcastReducer,
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
