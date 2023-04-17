import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { generateUserStories } from './service';
import { type StoryInitialStateType, type StoryResponse } from './types';

const initialState: StoryInitialStateType = {
  loading: false,
  listOfTask: [],
  error: false,
};

export const userStoriesSlice = createSlice({
  name: 'userStories',
  initialState,
  reducers: {
    resetTaskList: state => {
      state.listOfTask = [];
    },
  },
  extraReducers: builder => {
    builder.addCase(
      generateUserStories.pending,
      (state: StoryInitialStateType) => {
        state.loading = true;
        state.error = false;
        state.listOfTask = [];
      },
    );
    builder.addCase(
      generateUserStories.fulfilled,
      (state: StoryInitialStateType, action: PayloadAction<StoryResponse>) => {
        state.loading = false;
        state.listOfTask = action?.payload?.data?.taskList;
        state.error = false;
      },
    );
    builder.addCase(
      generateUserStories.rejected,
      (state: StoryInitialStateType) => {
        state.loading = false;
        state.error = true;
      },
    );
  },
});

export const { resetTaskList } = userStoriesSlice.actions;

export default userStoriesSlice.reducer;
