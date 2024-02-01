import { FC, useEffect } from 'react';
import * as Styled from './CreatorDetails.styled';

import { Button, Title } from '../../../../components';
import { useNavigate, useParams } from 'react-router-dom';
import { CreatorService } from '../../services';

export const CreatorDetails: FC = () => {
	const redirect = useNavigate();
	const { id } = useParams();

	useEffect(() => {
		const fetchCharacter = async () => {
			if (!id) return;
			const { creator } = await CreatorService.GetCreatorById(+id);
		};

		fetchCharacter();
	}, []);

	return (
		<Styled.Container>
			<Button variant='icon' label='Back to Home' onClick={() => redirect('/')} />
			<Title title='Creator Details' />
		</Styled.Container>
	);
};
