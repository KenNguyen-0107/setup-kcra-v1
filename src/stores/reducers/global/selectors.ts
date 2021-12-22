import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'stores/rootState';
import { initialState } from '.';

const selectSlice = (state: RootState) => state.global || initialState;

export const globalState = createSelector([selectSlice], global => {
  return global;
});

export const globalLanguage = createSelector(
  [selectSlice],
  global => global.language,
);

export const globalTimezone= createSelector(
  [selectSlice],
  global => global.timezone,
);
