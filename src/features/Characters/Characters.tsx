import { FC } from 'react';
import * as Styled from './Characters.styled';

import { useNavigate } from 'react-router-dom';
import { Button, Title } from '../../components';

export const Characters: FC = () => {
	const redirect = useNavigate();

	return (
		<Styled.Container>
			<Button variant='icon' label='Back to Home' onClick={() => redirect('/')} />
			<Title title='Characters' />
		</Styled.Container>
	);
};
