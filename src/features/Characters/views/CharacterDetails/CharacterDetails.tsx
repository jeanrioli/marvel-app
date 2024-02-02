import { FC, useEffect } from 'react';
import * as Styled from './CharacterDetails.styled';

import { useNavigate, useParams } from 'react-router-dom';
import { Button, Title } from '../../../../components';
import { CharacterService } from '../../services';

export const CharacterDetails: FC = () => {
	const redirect = useNavigate();
	const { id } = useParams();

	useEffect(() => {
		const fetchCharacter = async () => {
			if (!id) return;
			const { characters } = await CharacterService.GetCharactersById(Number(id));
		};

		fetchCharacter();
	}, []);

	return (
		<Styled.Container>
			<Button variant='icon' label='Back to Home' onClick={() => redirect('/')} />
			<Title title='Character Details' />
		</Styled.Container>
	);
};
