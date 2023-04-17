import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { reducers } from './rootReducers';
import { store } from './store';

export type AppDispatchType = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

type AppState = ReturnType<typeof reducers>;
type TypedDispatch<T> = ThunkDispatch<T, any, AnyAction>;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<TypedDispatch<AppState>>();
// export const useAppDispatch: () => AppDispatchType = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
