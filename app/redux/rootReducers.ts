import { combineReducers } from 'redux';
import { authReducer } from './authentication';
import { demoReducer } from './demo';
import { projectReducer } from './project';
import { UserStoriesReducer } from './userStories';

export const reducers = combineReducers({
  demo: demoReducer,
  auth: authReducer,
  project: projectReducer,
  userStory: UserStoriesReducer,
});
