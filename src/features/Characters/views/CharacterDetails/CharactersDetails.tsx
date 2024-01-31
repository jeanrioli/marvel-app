import { FC } from 'react';
import * as Styled from './CharacterDetails.styled';

import { useNavigate } from 'react-router-dom';
import { Button, Title } from '../../../../components';

export const CharacterDetails: FC = () => {
	const redirect = useNavigate();

	return (
		<Styled.Container>
			<Button variant='icon' label='Back to Home' onClick={() => redirect('/')} />
			<Title title='Character Details' />
		</Styled.Container>
	);
};
