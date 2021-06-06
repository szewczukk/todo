import { createSlice } from '@reduxjs/toolkit';
import Task from '../utils/taskType';

const initialState: Task[] = [];

const taskSlice = createSlice({ name: 'task', initialState, reducers: {} });

export default taskSlice;
export const actions = taskSlice.actions;
export const reducer = taskSlice.reducer;
