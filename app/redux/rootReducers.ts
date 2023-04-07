import { combineReducers } from 'redux';
import { demoReducer } from './demo';

export const reducers = combineReducers({
  demo: demoReducer,
});
