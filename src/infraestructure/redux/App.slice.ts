import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface AppStore {
	isAuthenticated: boolean;
	isDarkTheme: boolean | null;
}

const initialState: AppStore = {
	isAuthenticated: false,
	isDarkTheme: null,
};

export const AppSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		setIsAuthenticated: (state, { payload }: PayloadAction<AppStore['isAuthenticated']>) => {
			state.isAuthenticated = payload;
		},
		setIsDarkTheme: (state, { payload }: PayloadAction<AppStore['isDarkTheme']>) => {
			state.isDarkTheme = payload;
		},
	},
});
