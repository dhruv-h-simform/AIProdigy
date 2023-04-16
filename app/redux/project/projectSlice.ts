import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { getPortals, getProjects, getTasks } from './service';
import {
  type ProjectDataResponse,
  type ProjectInitialStateType,
  type ProjectsDataResponse,
} from './types';

const initialState: ProjectInitialStateType = {
  loading: false,
  error: false,
  portals: [],
  projects: [],
  tasks: [],
};

export const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getPortals.pending, (state: ProjectInitialStateType) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(
      getPortals.fulfilled,
      (
        state: ProjectInitialStateType,
        action: PayloadAction<ProjectDataResponse> & ProjectInitialStateType,
      ) => {
        state.loading = false;
        state.error = false;
        state.portals = action.payload.portals;
      },
    );
    builder.addCase(getPortals.rejected, (state: ProjectInitialStateType) => {
      state.loading = false;
      state.error = true;
    });

    builder.addCase(getProjects.pending, (state: ProjectInitialStateType) => {
      state.loading = true;
      state.error = false;
      state.projects = [];
    });
    builder.addCase(
      getProjects.fulfilled,
      (
        state: ProjectInitialStateType,
        action: PayloadAction<ProjectsDataResponse> & ProjectInitialStateType,
      ) => {
        state.loading = false;
        state.error = false;
        state.projects = action.payload.projects;
      },
    );
    builder.addCase(getProjects.rejected, (state: ProjectInitialStateType) => {
      state.loading = false;
      state.error = true;
    });

    builder.addCase(getTasks.pending, (state: ProjectInitialStateType) => {
      state.loading = true;
      state.error = false;
      state.tasks = [];
    });
    builder.addCase(
      getTasks.fulfilled,
      (
        state: ProjectInitialStateType,
        action: PayloadAction<ProjectsDataResponse> & ProjectInitialStateType,
      ) => {
        state.loading = false;
        state.error = false;
        state.tasks = action.payload.tasks;
      },
    );
    builder.addCase(getTasks.rejected, (state: ProjectInitialStateType) => {
      state.loading = false;
      state.error = true;
    });
  },
});

export const {} = projectSlice.actions;

export default projectSlice.reducer;
