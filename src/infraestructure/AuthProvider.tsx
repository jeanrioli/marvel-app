import { FC, ReactNode, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Authentication } from '../features';
import { getCookie } from '../utils';
import { AppContext } from './AppProvider';

interface AuthProviderProps {
	children: ReactNode;
}

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
	const { isAuthenticated } = useContext(AppContext);

	const redirect = useNavigate();

	useEffect(() => {
		if (!isAuthenticated) {
			redirect('/authentication', { replace: true });
		}
	}, [redirect]);

	if (!isAuthenticated) {
		return <Authentication />;
	}

	return <div>{children}</div>;
};
