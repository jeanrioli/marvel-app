import { FC, useEffect, useState } from 'react';
import * as Styled from './Characters.styled';

import { Button, Card, Title } from '../../../../components';
import { CharacterService } from '../../services';
import { useNavigate } from 'react-router-dom';
import { Character } from '../../../../entities';

export const Characters: FC = () => {
	const redirect = useNavigate();
	const [characters, setCharacters] = useState<Array<Character>>([]);

	useEffect(() => {
		const fetchCharacters = async () => {
			const { characters } = await CharacterService.GetCharacters();

			if (characters) {
				setCharacters(characters);
			}
		};

		fetchCharacters();
	}, []);

	return (
		<Styled.Container>
			<Button variant='icon' label='Back to Home' onClick={() => redirect('/')} />
			<Title title='Characters' />
			{characters.map((character) => (
				<Card redirect={`/characters/${character.id}`} name={character.name} />
			))}
		</Styled.Container>
	);
};
