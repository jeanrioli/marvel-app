import { FC, ReactNode, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getCookie } from '../../utils';
import { ReduxProps } from '.';
import { Authentication } from '../../features';

interface AuthProviderProps extends ReduxProps {
	children: ReactNode;
}

export const AuthProvider: FC<AuthProviderProps> = ({ children, isAuthenticated, setIsAuthenticated }) => {
	const privateKey = getCookie('privateKey');
	const publicKey = getCookie('publicKey');
	const hasKeys = !!privateKey && !!publicKey;
	const location = useLocation();
	const redirect = useNavigate();

	useEffect(() => {
		if (!isAuthenticated || !hasKeys) {
			redirect('/authentication', { replace: true });
			setIsAuthenticated(false);
		}
	}, [isAuthenticated, location.pathname]);

	if (!isAuthenticated || !hasKeys) {
		return <Authentication />;
	}

	return <div>{children}</div>;
};
