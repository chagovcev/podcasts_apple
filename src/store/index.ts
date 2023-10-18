import { configureStore } from '@reduxjs/toolkit';

import { todosApi } from '@store/api';

import { themesReducer } from '@features/themes';

export const store = configureStore({
  reducer: {
    theme: themesReducer,
    [todosApi.reducerPath]: todosApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todosApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
