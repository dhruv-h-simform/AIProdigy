import {
  createAction,
  createSlice,
  type PayloadAction,
} from '@reduxjs/toolkit';
import { type AuthInitialStateType } from './types';
import { doLogout } from './service';

const initialState: AuthInitialStateType = {
  loading: false,
  error: false,
};

export const resetAuth = createAction<void, 'resetAuth'>('resetAuth');

export const authenticationSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(doLogout.pending, (state: AuthInitialStateType) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(
      doLogout.fulfilled,
      (state: AuthInitialStateType, _action: PayloadAction<void>) => {
        state.loading = false;
        state.error = false;
      },
    );
    builder.addCase(doLogout.rejected, (state: AuthInitialStateType) => {
      state.loading = false;
      state.error = true;
    });
    builder.addCase(resetAuth, state => {
      state.loading = false;
      state.error = false;
    });
  },
});

export const {} = authenticationSlice.actions;

export default authenticationSlice.reducer;
