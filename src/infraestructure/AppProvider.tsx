import { Dispatch, FC, ReactNode, SetStateAction, createContext, useEffect, useState } from 'react';
import { getCookie } from '../utils';
import { DefaultTheme } from 'styled-components';
import LightTheme from '../themes/LightTheme';
import DarkTheme from '../themes/DarkTheme';

interface AppContextProps {
	isAuthenticated: boolean;
	isDarkTheme: boolean;
	setIsDarkTheme: Dispatch<SetStateAction<boolean>>;
	setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
}

export const AppContext = createContext<AppContextProps>({
	isAuthenticated: false,
	isDarkTheme: false,
	setIsDarkTheme: () => {},
	setIsAuthenticated: () => {},
});

export const AppProvider: FC<{ children: ReactNode }> = ({ children }) => {
	const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
	const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);

	useEffect(() => {
		const privateKey = getCookie('privateKey');
		const publicKey = getCookie('publicKey');
		const isAuthenticated = !!privateKey && !!publicKey;

		if (isAuthenticated) {
			setIsAuthenticated(true);
		}
	}, []);

	return (
		<AppContext.Provider
			value={{
				isAuthenticated: isAuthenticated,
				setIsAuthenticated: setIsAuthenticated,
				isDarkTheme: isDarkTheme,
				setIsDarkTheme: setIsDarkTheme,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
