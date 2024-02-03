import { FC, ReactNode, createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCookie } from '../utils';
import { Authentication } from '../features';

export const AppContext = createContext<{ isAuthenticated: boolean }>({ isAuthenticated: false });

export const AppProvider: FC<{ children: ReactNode }> = ({ children }) => {
	const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
	const redirect = useNavigate();

	useEffect(() => {
		const privateKey = getCookie('privateKey');
		const publicKey = getCookie('publicKey');
		const isAuthenticated = !!privateKey && !!publicKey;

		if (!isAuthenticated) {
			redirect('/authentication', { replace: true });
		} else {
			setIsAuthenticated(true);
		}
	}, [redirect]);

	if (!isAuthenticated) {
		return <Authentication />;
	}

	return (
		<div>
			<AppContext.Provider value={{ isAuthenticated: isAuthenticated }}>{children}</AppContext.Provider>
		</div>
	);
};
