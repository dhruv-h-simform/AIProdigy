import { combineReducers } from 'redux';
import { demoReducer } from './demo';
import { authReducer } from './authentication';

export const reducers = combineReducers({
  demo: demoReducer,
  auth: authReducer,
});
