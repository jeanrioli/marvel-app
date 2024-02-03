import { FC, useEffect, useState } from 'react';

import { Button, Card, CardList, Search, SearchPage, Title } from '../../../../components';
import { useNavigate } from 'react-router-dom';
import { ComicService } from '../../services';
import { Comic } from '../../../../entities';

export const Comics: FC = () => {
	const redirect = useNavigate();
	const [comicsList, setComicsList] = useState<Array<Comic>>([]);

	useEffect(() => {
		const fetchComics = async () => {
			const { comics } = await ComicService.GetComics();

			if (comics) {
				setComicsList(comics);
			}
		};

		fetchComics();

		// const mock = new Array(30);
		// mock.fill(CharacterMock);

		// setCharacters(mock);
	}, []);

	const fetchCharactersById = async (id: number) => {
		const { comics } = await ComicService.GetComicById(id);

		if (comics) {
			setComicsList(comics);
		}
	};

	const fetchCharactersBySearch = async (search: string) => {
		const { comics } = await ComicService.GetComicsBySearch(search);

		// if (characters) {
		// 	setCharacters(characters);
		// }

		if (!comics) return [];

		const results = comics.map((comic) => ({ label: comic.title, value: comic.id }));

		return results;
	};

	const clearResults = () => {
		setComicsList([]);
	};

	return (
		<SearchPage>
			<Button variant='icon' label='Back to Home' onClick={() => redirect('/')} />
			<Title title='Comics' />
			{/* <Search onSearch={fetchCharactersBySearch} onSelect={fetchCharactersById} /> */}
			<CardList>
				{comicsList.map((comic) => (
					<Card key={comic.id} variant='comic' {...comic} />
				))}
			</CardList>
		</SearchPage>
	);
};
