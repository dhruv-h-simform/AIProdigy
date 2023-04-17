import { createAsyncThunk } from '@reduxjs/toolkit';
import type { AxiosError } from 'axios';
import { ApiUrls } from '../../constants';
import { getUserStoriesApiInstant } from '../../services/Api';
import type { ValidationErrors } from '../demo';
import type { StoryPayload, StoryResponse } from './types';

/**
 * Generate UserStories
 */
export const generateUserStories = createAsyncThunk<
  StoryResponse, // response from api
  StoryPayload, // send payload to api
  {
    rejectValue: ValidationErrors;
  }
>('generateUserStories', async (payload, { rejectWithValue }) => {
  try {
    const { data, ok } = await getUserStoriesApiInstant().post<any, any>(
      ApiUrls?.userStories.generateUserStories,
      payload,
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
