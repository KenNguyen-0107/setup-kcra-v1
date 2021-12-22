import { createSlice } from 'utils/@toolkit';
import { useInjectReducer } from 'utils/redux-injectors';
import { ITheme } from 'types/themeTypes';

export const isDarkMode = localStorage.getItem('isDarkMode') === 'true';

export const initialState: ITheme = {
  isDarkMode: isDarkMode,
};

const slice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme(state) {
      console.log(state.isDarkMode)
      state.isDarkMode = !state.isDarkMode;
      localStorage.setItem('isDarkMode', JSON.stringify(!state.isDarkMode));
    },
  },
});

export const { actions: themeActions } = slice;

export const useThemeSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  return { actions: slice.actions };
};
