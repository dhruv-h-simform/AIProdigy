import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type DemoInitialStateType } from './types';

const initialState: DemoInitialStateType = {
  name: 'Default Item',
  value: 0,
  requestValue: false,
};

export const demoSlice = createSlice({
  name: 'demo',
  initialState,
  reducers: {
    valueRequest: state => {
      state.requestValue = true;
    },
    valueSuccess: (state, action: PayloadAction<number>) => {
      state.requestValue = false;
      state.value = action.payload;
    },
  },
});

export const { valueSuccess, valueRequest } = demoSlice.actions;

export default demoSlice.reducer;
