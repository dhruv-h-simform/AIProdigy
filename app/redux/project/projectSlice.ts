import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { getPortals, getProjects, getTasks } from './service';
import {
  type ProjectDataResponse,
  type ProjectInitialStateType,
  type ProjectsDataResponse,
  type TasksDataResponse,
} from './types';

const initialState: ProjectInitialStateType = {
  loading: false,
  error: false,
  portals: [],
  projects: [],
  tasks: [],
  login_id: undefined,
};

export const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getPortals.pending, (state: ProjectInitialStateType) => {
      state.loading = true;
      state.error = false;
      state.login_id = undefined;
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
        state.login_id = action.payload.login_id;
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
        action: PayloadAction<TasksDataResponse> & ProjectInitialStateType,
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
