import { createAsyncThunk } from '@reduxjs/toolkit';
import type { AxiosError } from 'axios';
import { AuthorizedAPI } from '../../services/Api';
import type { ValidationErrors } from '../demo';
import { ApiUrls, AppConstants } from '../../constants';
import { getString } from '../../utils';

/**
 * DoLogout thunk api call
 */
export const doLogout = createAsyncThunk<
  void, // response from api
  void, // send payload to api
  {
    rejectValue: ValidationErrors;
  }
>('logout', async (_, { rejectWithValue }) => {
  try {
    const token = await getString(AppConstants.AUTH_TOKEN);
    const { data, ok } = await AuthorizedAPI.post<any, any>(
      `${ApiUrls.logout.logout}${token}`,
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
