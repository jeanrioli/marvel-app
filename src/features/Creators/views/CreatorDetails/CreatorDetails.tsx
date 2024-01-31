import { FC } from 'react';
import * as Styled from './CreatorDetails.styled';

import { Button, Title } from '../../../../components';
import { useNavigate } from 'react-router-dom';

export const CreatorDetails: FC = () => {
	const redirect = useNavigate();

	return (
		<Styled.Container>
			<Button variant='icon' label='Back to Home' onClick={() => redirect('/')} />
			<Title title='Creator Details' />
		</Styled.Container>
	);
};
