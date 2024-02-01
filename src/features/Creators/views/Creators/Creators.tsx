import { FC, useEffect } from 'react';
import * as Styled from './Creators.styled';

import { Button, Title } from '../../../../components';
import { useNavigate } from 'react-router-dom';
import { CreatorService } from '../../services';

export const Creators: FC = () => {
	const redirect = useNavigate();

	useEffect(() => {
		const fetchCreators = async () => {
			const { creators } = await CreatorService.GetCreators();
		};

		fetchCreators();
	}, []);

	return (
		<Styled.Container>
			<Button variant='icon' label='Back to Home' onClick={() => redirect('/')} />
			<Title title='Comics' />
		</Styled.Container>
	);
};
