import { FC, useEffect, useState } from 'react';

import { useNavigate, useParams } from 'react-router-dom';
import { Button, DetailPage, Thumbnail, Title } from '../../../../components';
import { CharacterService } from '../../services';
import { Character } from '../../../../entities';

export const CharacterDetails: FC = () => {
	const redirect = useNavigate();
	const { id } = useParams();
	const [character, setCharacter] = useState<Character | null>(null);

	useEffect(() => {
		const fetchCharacter = async () => {
			if (!id) return;

			const { characters, errorMessage } = await CharacterService.GetCharactersById(Number(id));

			if (errorMessage) {
				alert(errorMessage);
			}

			if (!characters || characters?.length === 0) {
				redirect('/');
				return;
			}

			setCharacter(characters[0]);
		};

		fetchCharacter();
	}, [id]);

	if (!character) return null;

	return (
		<DetailPage>
			<Button variant='icon' label='Back to Home' onClick={() => redirect('/')} />
			<Title title={character.name} />
			<Thumbnail src={character.thumbnail.path + '.' + character.thumbnail.extension} alt={character.name} />
			<span>{!!character.description.length ? character.description : 'Nothing to see here!'}</span>
		</DetailPage>
	);
};
