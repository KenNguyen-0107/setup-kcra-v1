import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'stores/rootState';
import { initialState } from '.';
import { themes } from 'constants/themeConstant';

export const selectTheme = createSelector(
  [(state: RootState) => state.theme || initialState],
  theme => {
    return themes[theme.isDarkMode ? 'dark' : 'light'];
  },
);

export const selectThemeKey = createSelector(
  [(state: RootState) => state.theme || initialState],
  theme => theme.isDarkMode,
);
