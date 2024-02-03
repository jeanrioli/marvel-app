import { FC, useContext, useState } from 'react';
import * as Styled from './Authentication.styled';

import { useCookies } from 'react-cookie';
import { Button, ButtonPage, Input, Title } from '../../components';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../infraestructure';

export const Authentication: FC = () => {
	const { isAuthenticated, setIsAuthenticated } = useContext(AppContext);
	const [publicKey, setPublicKey] = useState('dee2436a7571e5855f3a9fd04b131220');
	const [privateKey, setPrivateKey] = useState('ca2306cf85da44d5b4a7726e6ed894c8c8468314');
	const [_, setCookie] = useCookies();
	const redirect = useNavigate();

	const saveKeys = () => {
		setCookie('publicKey', publicKey);
		setCookie('privateKey', privateKey);

		if (!!publicKey && !!privateKey) {
			console.log('redirect');
			setIsAuthenticated(true);
			redirect('/');
			return;
		}

		alert('Insert keys');
	};

	return (
		<Styled.Container>
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
