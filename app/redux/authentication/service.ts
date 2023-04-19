import { createAsyncThunk } from '@reduxjs/toolkit';
import type { AxiosError } from 'axios';
import { AuthorizedAPI } from '../../services/Api';
import type { ValidationErrors } from '../demo';
import { ApiUrls, AppConstants } from '../../constants';
import { getString, handleError } from '../../utils';
import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Generate access and refresh token
 */
export const generateAccessToken = createAsyncThunk<
  void, // response from api
  void, // send payload to api
  {
    rejectValue: ValidationErrors;
  }
>('generateAccess', async (_, { rejectWithValue }) => {
  try {
    const token = await getString(AppConstants.AUTH_TOKEN);
    const { data, ok } = await AuthorizedAPI.post<any, any>(
      `${ApiUrls.token.createToken}${token}&redirect_uri=${AppConstants.ZOHO_REDIRECT_URL}&client_id=${AppConstants.ZOHO_CLIENT_ID}&client_secret=${AppConstants.ZOHO_CLIENT_Secret}&grant_type=authorization_code`,
    );
    const authToken = data?.access_token;
    await AsyncStorage.setItem(AppConstants.API_AUTH_TOKEN, authToken);
    if (!ok) {
      return rejectWithValue(data);
    }
    handleError(data);
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
    handleError(data);
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
