import { FC, useEffect, useState } from 'react';
import * as Styled from './Creators.styled';

import { Button, Card, CardList, SearchPage, Search, Title } from '../../../../components';
import { useNavigate } from 'react-router-dom';
import { CreatorService } from '../../services';
import { Creator } from '../../../../entities';

export const Creators: FC = () => {
	const redirect = useNavigate();
	const [creators, setCreators] = useState<Array<Creator>>([]);

	useEffect(() => {
		const fetchCreators = async () => {
			const { creators } = await CreatorService.GetCreators();

			if (creators) {
				setCreators(creators);
			}
		};

		fetchCreators();

		// const mock = new Array(30);
		// mock.fill(CharacterMock);

		// setCharacters(mock);
	}, []);

	const fetchCreatorById = async (id: number) => {
		const { creators } = await CreatorService.GetCreatorById(id);

		if (creators) {
			setCreators(creators);
		}
	};

	const fetchCreatorsBySearch = async (search: string) => {
		const { creators } = await CreatorService.GetCreatorsBySearch(search);

		// if (characters) {
		// 	setCharacters(characters);
		// }

		console.log(creators);
		if (!creators) return [];

		const results = creators.map((creator) => ({ label: creator.fullName, value: creator.id }));

		return results;
	};

	return (
		<SearchPage>
			<Button variant='icon' label='Back to Home' onClick={() => redirect('/')} />
			<Title title='Comics' />
			<Search onSearch={fetchCreatorsBySearch} onSelect={fetchCreatorById} />
			<CardList>
				{creators.map((creator) => (
					<Card key={creator.id} variant='creator' {...creator} />
				))}
			</CardList>
		</SearchPage>
	);
};
