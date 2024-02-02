import { FC, useState } from 'react';
import * as Styled from './Home.styled';
import { ButtonPage, Title } from '../../components';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

export const Home: FC = () => {
	const [publicKey, setPublicKey] = useState('dee2436a7571e5855f3a9fd04b131220');
	const [privateKey, setPrivateKey] = useState('ca2306cf85da44d5b4a7726e6ed894c8c8468314');
	const redirect = useNavigate();
	const [cookies, setCookie] = useCookies();

	const saveKeys = () => {
		setCookie('publicKey', publicKey);
		setCookie('privateKey', privateKey);
	};

	return (
		<Styled.Container>
			<Title title='Welcome to Marvel App!' subtitle='Select one of the pages below to see the content:' />
			<Styled.Pages>
				<ButtonPage label='Characters' onClick={() => redirect('/characters')} />
				<ButtonPage label='Comics' onClick={() => redirect('/comics')} />
				<ButtonPage label='Creators' onClick={() => redirect('/creators')} />
				<ButtonPage label='Favorites' onClick={() => redirect('/favorites')} />
				Public key
				<input type='text' value={publicKey} onChange={(ev) => setPublicKey(ev.target.value)} />
				Private key
				<input type='text' value={privateKey} onChange={(ev) => setPrivateKey(ev.target.value)} />
				<button onClick={saveKeys}>Save keys</button>
			</Styled.Pages>
		</Styled.Container>
	);
};
