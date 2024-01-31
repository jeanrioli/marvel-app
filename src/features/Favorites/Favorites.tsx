import { FC } from 'react';
import * as Styled from './Favorites.styled';

import { Button, Title } from '../../components';
import { useNavigate } from 'react-router-dom';

export const Favorites: FC = () => {
	const redirect = useNavigate();

	return (
		<Styled.Container>
			<Button variant='icon' label='Back to Home' onClick={() => redirect('/')} />
			<Title title='Favorites' />
		</Styled.Container>
	);
};
