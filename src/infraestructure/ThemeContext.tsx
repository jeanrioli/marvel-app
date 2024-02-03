import { FC, ReactNode, useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { AppContext } from './AppProvider';
import DarkTheme from '../themes/DarkTheme';
import LightTheme from '../themes/LightTheme';

interface ThemeContextProps {
	children: ReactNode;
}

export const ThemeContext: FC<ThemeContextProps> = ({ children }) => {
	const { isDarkTheme } = useContext(AppContext);

	return <ThemeProvider theme={isDarkTheme ? DarkTheme : LightTheme}>{children}</ThemeProvider>;
};
