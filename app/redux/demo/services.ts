import { createAsyncThunk } from '@reduxjs/toolkit';
import type { AxiosError } from 'axios';
import { AuthorizedAPI } from '../../services/Api';
import {
  type CreateResponsePayload,
  type CreatePayload,
  type GetPayload,
  type ValidationErrors,
  type GetAllData,
} from './types';

/**
 * DoCreate thunk api call
 */
export const doCreate = createAsyncThunk<
  CreateResponsePayload, // response from api
  CreatePayload, // send payload to api
  {
    rejectValue: ValidationErrors;
  }
>('xyz/create', async (payload, { rejectWithValue }) => {
  try {
    const { data, ok } = await AuthorizedAPI.post<any, any>('url', payload);

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
 * getAll
 */
export const getAllRequest = createAsyncThunk<
  GetAllData,
  GetPayload,
  {
    rejectValue: ValidationErrors;
  }
>('getAll', async (payload, { rejectWithValue }) => {
  try {
    const { data, ok } = await AuthorizedAPI.get<any, any>('url', payload);

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

type getByIDType = {
  id: string;
};

/**
 * getAll
 */
export const getByID = createAsyncThunk<
  GetAllData,
  getByIDType,
  {
    rejectValue: ValidationErrors;
  }
>('getByID', async (payload, { rejectWithValue }) => {
  try {
    const { data, ok } = await AuthorizedAPI.get<any, any>(
      'url' + `${payload?.id}`,
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

type UpdatePayload = {
  xyz: { name: string; description: string };
  id: string;
};

/**
 * DoUpdate thunk api call
 */
export const doUpdate = createAsyncThunk<
  CreateResponsePayload,
  UpdatePayload,
  {
    rejectValue: ValidationErrors;
  }
>('xyz/update', async (payload, { rejectWithValue }) => {
  try {
    const { xyz, id } = payload;
    const { data, ok } = await AuthorizedAPI.put<any, any>('url' + id, xyz);

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
