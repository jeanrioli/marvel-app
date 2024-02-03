import { FC, ReactNode, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { ReduxProps } from '.';
import DarkTheme from '../../themes/DarkTheme';
import LightTheme from '../../themes/LightTheme';

interface ThemeContextProps extends ReduxProps {
	children: ReactNode;
}

export const ThemeContext: FC<ThemeContextProps> = ({ children, isDarkTheme, setIsDarkTheme }) => {
	useEffect(() => {
		if (isDarkTheme === null) {
			const osColorSchemeIsDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

			setIsDarkTheme(osColorSchemeIsDark);
		}
	}, [isDarkTheme]);

	return <ThemeProvider theme={isDarkTheme ? DarkTheme : LightTheme}>{children}</ThemeProvider>;
};
