import { Dispatch } from '@reduxjs/toolkit';
import { AppSlice, AppStore } from './App.slice';

export const AppOperations = {
	setIsAuthenticated: (isAuthenticated: AppStore['isAuthenticated']) => (dispatch: Dispatch) => {
		dispatch(AppSlice.actions.setIsAuthenticated(isAuthenticated));
	},

	setIsDarkTheme: (isDarkTheme: AppStore['isDarkTheme']) => (dispatch: Dispatch) => {
		dispatch(AppSlice.actions.setIsDarkTheme(isDarkTheme));
	},
};
