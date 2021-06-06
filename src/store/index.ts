import { configureStore } from '@reduxjs/toolkit';
import { reducer as taskReducer } from './taskSlice';

const store = configureStore({ reducer: { tasks: taskReducer } });

export default store;
