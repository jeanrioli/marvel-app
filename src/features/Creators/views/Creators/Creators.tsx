import { FC, useEffect, useLayoutEffect, useState } from 'react';

import { Button, Card, CardList, SearchPage, SearchBar, Title, Loading } from '../../../../components';
import { CreatorService } from '../../services';
import { useNavigate } from 'react-router-dom';
import { Creator } from '../../../../entities';

export const Creators: FC = () => {
	const redirect = useNavigate();
	const [creatorsList, setCreatorsList] = useState<Array<Creator>>([]);
	const [searching, setSearching] = useState<boolean>(false);
	const [creatorSearched, setCreatorSearched] = useState<Array<Creator>>([]);
	const [page, setPage] = useState<number>(0);

	useEffect(() => {
		document.addEventListener('scroll', handleInfinityScroll);
		return () => document.removeEventListener('scroll', handleInfinityScroll);
	}, []);

	useLayoutEffect(() => {
		const fetchCreators = async () => {
			setSearching(true);

			const { creators, errorMessage } = await CreatorService.GetCreators(page);

			if (!!errorMessage) {
				setSearching(false);
				alert(errorMessage);
				return;
			}

			if (creators) {
				const _creators = [...creatorsList];
				const newArray = _creators.concat(creators);

				setCreatorsList(newArray);
				setSearching(false);
			}

			setSearching(false);
		};

		fetchCreators();
	}, [page]);

	const handleInfinityScroll = () => {
		const scrolledToTheBottom = window.innerHeight + Math.round(window.scrollY) >= document.body.offsetHeight;

		if (scrolledToTheBottom) {
			setPage((prev) => prev + 1);
		}
	};

	const fetchCreatorsById = async (id: number) => {
		document.removeEventListener('scroll', handleInfinityScroll);

		const { creators, errorMessage } = await CreatorService.GetCreatorById(id);

		if (!!errorMessage) {
			alert(errorMessage);
			return;
		}

		if (creators) {
			setCreatorSearched(creators);
		}
	};

	const fetchCreatorsBySearch = async (search: string) => {
		if (!search) return [];

		setSearching(true);

		const { creators, errorMessage } = await CreatorService.GetCreatorsBySearch(search);

		if (!!errorMessage) {
			alert(errorMessage);
			setSearching(false);
			return [];
		}

		if (!creators) {
			setSearching(false);
			return [];
		}

		const results = creators.map((creator) => ({ label: creator.fullName, value: creator.id }));

		setSearching(false);
		return results;
	};

	const clearResults = async () => {
		document.addEventListener('scroll', handleInfinityScroll);
		setCreatorSearched([]);
	};

	return (
		<SearchPage>
			<Button variant='icon' label='Back to Home' onClick={() => redirect('/')} />
			<Title title='Creators' />
			<SearchBar
				label='Search for a creator'
				onSearch={fetchCreatorsBySearch}
				onSelect={fetchCreatorsById}
				onClear={clearResults}
				loading={searching}
			/>
			<CardList>
				{creatorSearched.length > 0
					? creatorSearched.map((creator) => <Card key={creator.id} variant='creator' {...creator} />)
					: creatorsList.map((creator) => <Card key={creator.id} variant='creator' {...creator} />)}
			</CardList>
			{searching ? <Loading /> : null}
		</SearchPage>
	);
};
