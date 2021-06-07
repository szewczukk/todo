import { createSlice } from '@reduxjs/toolkit';

interface State {
	open: boolean;
}

const initialState: State = { open: false };

const drawerSlice = createSlice({
	name: 'task',
	initialState,
	reducers: {
		toggleOpenness: (state) => {
			state.open = !state.open;
		},
	},
});

export default drawerSlice;
export const actions = drawerSlice.actions;
export const reducer = drawerSlice.reducer;
