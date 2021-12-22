import { createSlice } from 'utils/@toolkit';
import { useInjectReducer } from 'utils/redux-injectors';
import { IGlobal } from 'types/globalTypes';
import { PayloadAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

export const initialState: IGlobal = {
  language: 'en',
  timezone: 'GMT+07',
};

const slice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    changeLanguage(state, action: PayloadAction<string>) {
      state.language = action.payload;
    },
    changeTimezone(state, action: PayloadAction<string>) {
      state.timezone = action.payload;
    },
    getGlobalData(state, action: PayloadAction<any>) {},
    getGlobalDataSucceed(state, action: PayloadAction<any>) {
      toast.success(action.payload);
    },
    getGlobalDataFailed(state, action: PayloadAction<any>) {
      toast.error(action.payload);
    },
  },
});

export const { actions: globalActions } = slice;

export const useThemeSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  return { actions: slice.actions };
};
