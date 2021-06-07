import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { reducer as taskReducer } from './taskSlice';
import { reducer as drawerSlice } from './drawerSlice';

const store = configureStore({
	reducer: { tasks: taskReducer, drawer: drawerSlice },
});
type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export default store;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
