import { createSlice } from '@reduxjs/toolkit';

const themes = ['dark', 'light'] as const;

type themeType = (typeof themes)[number];

const isThemeType = (theme: string): theme is themeType =>
  themes.includes(theme as themeType);

interface IInitialState {
  theme: themeType;
}

const themeInStorage = localStorage.getItem('theme');

const initialState: IInitialState = {
  theme:
    !!themeInStorage && isThemeType(themeInStorage) ? themeInStorage : 'light',
};

export const themesSlice = createSlice({
  name: 'themes',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
  },
});

export const { toggleTheme } = themesSlice.actions;

export default themesSlice.reducer;
