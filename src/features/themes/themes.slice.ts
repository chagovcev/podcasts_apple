import { createSlice } from '@reduxjs/toolkit';

import { LS_THEME } from '@constants/localStorage';

export const THEMES = {
  DARK: 'dark',
  LIGHT: 'light',
};

const themes = [THEMES.DARK, THEMES.LIGHT] as const;

type themeType = (typeof themes)[number];

const isThemeType = (theme: string): theme is themeType =>
  themes.includes(theme);

interface IInitialState {
  theme: themeType;
}

const themeInStorage = localStorage.getItem(LS_THEME);

const initialState: IInitialState = {
  theme:
    !!themeInStorage && isThemeType(themeInStorage)
      ? themeInStorage
      : THEMES.LIGHT,
};

export const themesSlice = createSlice({
  name: 'themes',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
    },
  },
});

export const { toggleTheme } = themesSlice.actions;

export default themesSlice.reducer;
