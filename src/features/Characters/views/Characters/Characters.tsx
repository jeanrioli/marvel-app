import React, { FC, ReactNode, useEffect, useState } from 'react';
import * as Styled from './Characters.styled';

import { Button, Card, CardList, SearchPage, Input, Search, Title } from '../../../../components';
import { CharacterService } from '../../services';
import { useNavigate } from 'react-router-dom';
import { Character } from '../../../../entities';
import { CharacterMock } from '../../../../utils';

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

		// const mock = new Array(30);
		// mock.fill(CharacterMock);

		// setCharacters(mock);
	}, []);

	const fetchCharactersById = async (id: number) => {
		const { characters } = await CharacterService.GetCharactersById(id);

		if (characters) {
			setCharacters(characters);
		}
	};

	const fetchCharactersBySearch = async (search: string) => {
		const { characters } = await CharacterService.GetCharactersBySearch(search);

		// if (characters) {
		// 	setCharacters(characters);
		// }

		if (!characters) return [];

		const results = characters.map((character) => ({ label: character.name, value: character.id }));

		return results;
	};

	return (
		<SearchPage>
			<Button variant='icon' label='Back to Home' onClick={() => redirect('/')} />
			<Title title='Characters' />
			<Search onSearch={fetchCharactersBySearch} onSelect={fetchCharactersById} />
			<CardList>
				{characters.map((character) => (
					<Card key={character.id} variant='character' {...character} />
				))}
			</CardList>
		</SearchPage>
	);
};
