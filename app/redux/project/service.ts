import { createAsyncThunk } from '@reduxjs/toolkit';
import type { AxiosError, AxiosRequestConfig } from 'axios';
import { ApiUrls, AppConstants } from '../../constants';
import { ProjectAuthorizedAPI } from '../../services/Api';
import type { ValidationErrors } from '../demo';
import type {
  CreateProjectProps,
  CreateTaskProps,
  ProListProps,
} from './types';

/**
 * GetAll Portals thunk api call
 */
export const getPortals = createAsyncThunk<
  void, // response from api
  void, // send payload to api
  {
    rejectValue: ValidationErrors;
  }
>('Portals', async (_, { rejectWithValue }) => {
  try {
    const { data, ok } = await ProjectAuthorizedAPI.get<any, any>(
      `${ApiUrls.home.portals}`,
    );

    if (!ok) {
      return rejectWithValue(data);
    }
    return { ...data };
  } catch (err: any) {
    const error: AxiosError<ValidationErrors> = err; // cast the error for access
    if (!error.response) {
      throw err;
    }
    // We got validation errors, let's return those so we can reference in our component and set form errors
    return rejectWithValue(error.response.data);
  }
});

/**
 * GetAll Projects thunk api call
 */
export const getProjects = createAsyncThunk(
  'Projects',
  async (payload: ProListProps, { rejectWithValue }) => {
    try {
      const { data, ok } = await ProjectAuthorizedAPI.get<any, any>(
        `${ApiUrls.home.portal}${payload?.portalId}/${ApiUrls.home.projects}`,
      );
      if (!ok) {
        return rejectWithValue(data);
      }
      return { ...data };
    } catch (err: any) {
      const error: AxiosError<ValidationErrors> = err; // cast the error for access
      if (!error.response) {
        throw err;
      }
      // We got validation errors, let's return those so we can reference in our component and set form errors
      return rejectWithValue(error.response.data);
    }
  },
);

/**
 * GetAll Projects thunk api call
 */
export const getTasks = createAsyncThunk(
  'Tasks',
  async (payload: ProListProps, { rejectWithValue }) => {
    try {
      const url = `${ApiUrls.home.portal}${payload?.portalId}/${ApiUrls.home.projects}${payload?.projectId}/${ApiUrls.home.tasks}`;
      const { data, ok } = await ProjectAuthorizedAPI.get<any, any>(url);
      if (!ok) {
        return rejectWithValue(data);
      }
      return { ...data };
    } catch (err: any) {
      const error: AxiosError<ValidationErrors> = err; // cast the error for access
      if (!error.response) {
        throw err;
      }
      // We got validation errors, let's return those so we can reference in our component and set form errors
      return rejectWithValue(error.response.data);
    }
  },
);

export function objToFormData(obj: any = {}) {
  var form = new FormData();
  for (const key in obj) {
    form.append(key, obj[key]);
  }
  return form;
}

/**
 * GetAll Projects thunk api call
 */
export const createProjects = createAsyncThunk(
  'Projects',
  async (payload: CreateProjectProps, { rejectWithValue }) => {
    try {
      const config: AxiosRequestConfig = {
        baseURL: AppConstants.PROJECT_BASE_URL,
        method: 'post',
        url: `${ApiUrls.home.portal}${payload?.portalId}/${ApiUrls.home.projects}`,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
        },
        transformRequest: data => {
          return data;
        },
        data: payload,
      };
      const { data, ok } = await ProjectAuthorizedAPI.post<any, any>(
        `${ApiUrls.home.portal}${payload?.portalId}/${ApiUrls.home.projects}`,
        objToFormData(payload),
        config,
      );
      if (!ok) {
        return rejectWithValue(data);
      }
      return { ...data };
    } catch (err: any) {
      const error: AxiosError<ValidationErrors> = err; // cast the error for access
      if (!error.response) {
        throw err;
      }
      // We got validation errors, let's return those so we can reference in our component and set form errors
      return rejectWithValue(error.response.data);
    }
  },
);

/**
 * Create Task thunk api call
 */
export const createTasks = createAsyncThunk(
  'Projects',
  async (payload: CreateTaskProps, { rejectWithValue }) => {
    try {
      const url = `${ApiUrls.home.portal}${payload?.portalId}/${ApiUrls.home.projects}${payload?.projectId}/${ApiUrls.home.tasks}`;

      const config: AxiosRequestConfig = {
        baseURL: AppConstants.PROJECT_BASE_URL,
        method: 'post',
        url: url,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
        },
        transformRequest: data => {
          return data;
        },
        data: payload,
      };
      const { data, ok } = await ProjectAuthorizedAPI.post<any, any>(
        `${ApiUrls.home.portal}${payload?.portalId}/${ApiUrls.home.projects}`,
        objToFormData(payload),
        config,
      );
      if (!ok) {
        return rejectWithValue(data);
      }
      return { ...data };
    } catch (err: any) {
      const error: AxiosError<ValidationErrors> = err; // cast the error for access
      if (!error.response) {
        throw err;
      }
      // We got validation errors, let's return those so we can reference in our component and set form errors
      return rejectWithValue(error.response.data);
    }
  },
);
