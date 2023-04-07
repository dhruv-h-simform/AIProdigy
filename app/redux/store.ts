import AsyncStorage from '@react-native-async-storage/async-storage';
import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import { AppConstants } from '../constants';
import { reducers } from './rootReducers';

const persistConfig = {
  key: 'BMS',
  storage: AsyncStorage,
  blacklist: ['navigation'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

const persistor = persistStore(store);
/**
 * This Log is temporary, By with we can directly put it in postman environments
 */
AsyncStorage.getItem(AppConstants.AUTH_TOKEN).then((token) => {
  console.log('store.ts token ', token);
});

export { store, persistor };
