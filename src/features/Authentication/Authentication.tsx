import { FC, useState } from 'react';
import * as Styled from './Authentication.styled';

import { useCookies } from 'react-cookie';
import { Button, ButtonPage, Input, Title } from '../../components';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ReduxProps } from '.';

interface AuthenticationProps extends ReduxProps {}

export const Authentication: FC<AuthenticationProps> = ({ isAuthenticated, setIsAuthenticated }) => {
	const [publicKey, setPublicKey] = useState('');
	const [privateKey, setPrivateKey] = useState('');
	const [_, setCookie] = useCookies();
	const redirect = useNavigate();

	const saveKeys = () => {
		setCookie('publicKey', publicKey);
		setCookie('privateKey', privateKey);

		if (!!publicKey && !!privateKey) {
			setIsAuthenticated(true);
			redirect('/');
			return;
		}

		alert('Insert keys');
	};

	return (
		<Styled.Container>
			<Helmet>
				<title>Authentication | Marvel App</title>
			</Helmet>
			{isAuthenticated ? <Button variant='icon' label='Back to Home' onClick={() => redirect('/')} /> : null}
			<Title title='Authentication' />
			<Input
				type='text'
				value={publicKey}
				onChange={(ev) => setPublicKey(ev.target.value)}
				onClickIcon={() => setPublicKey('')}
				label='Public key'
			/>

			<Input
				type='text'
				value={privateKey}
				onChange={(ev) => setPrivateKey(ev.target.value)}
				onClickIcon={() => setPrivateKey('')}
				label='Private key'
			/>
			<ButtonPage label='Access' onClick={saveKeys} />
		</Styled.Container>
	);
};
