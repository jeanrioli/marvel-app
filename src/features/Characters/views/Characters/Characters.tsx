import { FC, useEffect, useState } from 'react';

import { Button, Card, CardList, SearchPage, Search, Title, Loading } from '../../../../components';
import { CharacterService } from '../../services';
import { useNavigate } from 'react-router-dom';
import { Character } from '../../../../entities';

export const Characters: FC = () => {
	const redirect = useNavigate();
	const [charactersList, setCharactersList] = useState<Array<Character>>([]);
	const [searching, setSearching] = useState<boolean>(false);
	const [characterSearched, setCharacterSearched] = useState<Array<Character>>([]);
	const [offset, setOffset] = useState<number>(0);

	useEffect(() => {
		document.addEventListener('scroll', handleInfinityScroll);
		return () => document.removeEventListener('scroll', handleInfinityScroll);
	}, []);

	useEffect(() => {
		const fetchCharacters = async () => {
			setSearching(true);

			const { characters, errorMessage } = await CharacterService.GetCharacters(offset);

			if (!!errorMessage) {
				setSearching(false);
				alert(errorMessage);
				return;
			}

			if (characters) {
				const _characters = [...charactersList];
				const newArray = _characters.concat(characters);

				setCharactersList(newArray);
				setSearching(false);
			}

			setSearching(false);
		};

		fetchCharacters();
	}, [offset]);

	const handleInfinityScroll = () => {
		const scrolledToTheBottom = window.innerHeight + Math.round(window.scrollY) >= document.body.offsetHeight;

		if (scrolledToTheBottom) {
			setOffset((prev) => prev + 1);
		}
	};

	const fetchCharactersById = async (id: number) => {
		document.removeEventListener('scroll', handleInfinityScroll);

		const { characters, errorMessage } = await CharacterService.GetCharactersById(id);

		if (!!errorMessage) {
			alert(errorMessage);
			return;
		}

		if (characters) {
			setCharacterSearched(characters);
		}
	};

	const fetchCharactersBySearch = async (search: string) => {
		if (!search) return [];

		setSearching(true);

		const { characters, errorMessage } = await CharacterService.GetCharactersBySearch(search);

		if (!!errorMessage) {
			alert(errorMessage);
			setSearching(false);
			return [];
		}

		if (!characters) {
			setSearching(false);
			return [];
		}

		const results = characters.map((character) => ({ label: character.name, value: character.id }));

		setSearching(false);
		return results;
	};

	const clearResults = async () => {
		document.addEventListener('scroll', handleInfinityScroll);
		setCharacterSearched([]);
	};

	useEffect(() => {
		console.log(characterSearched);
	}, [characterSearched]);

	return (
		<SearchPage>
			<Button variant='icon' label='Back to Home' onClick={() => redirect('/')} />
			<Title title='Characters' />
			<Search
				label='Search for a character'
				onSearch={fetchCharactersBySearch}
				onSelect={fetchCharactersById}
				onClear={clearResults}
				loading={searching}
			/>
			<CardList>
				{characterSearched.length > 0
					? characterSearched.map((character) => <Card key={character.id} variant='character' {...character} />)
					: charactersList.map((character) => <Card key={character.id} variant='character' {...character} />)}
			</CardList>
			{searching ? <Loading /> : null}
		</SearchPage>
	);
};
