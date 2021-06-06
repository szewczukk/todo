import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { reducer as taskReducer } from './taskSlice';

const store = configureStore({ reducer: { tasks: taskReducer } });
type RootState = ReturnType<typeof store.getState>;

export default store;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
