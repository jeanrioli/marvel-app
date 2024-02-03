import { FC, useEffect, useLayoutEffect, useState } from 'react';

import { Button, Card, CardList, SearchPage, SearchBar, Title, Loading } from '../../../../components';
import { ComicService } from '../../services';
import { useNavigate } from 'react-router-dom';
import { Comic } from '../../../../entities';
import { Helmet } from 'react-helmet';

export const Comics: FC = () => {
	const redirect = useNavigate();
	const [comicsList, setComicsList] = useState<Array<Comic>>([]);
	const [searching, setSearching] = useState<boolean>(false);
	const [comicSearched, setComicSearched] = useState<Array<Comic>>([]);
	const [page, setPage] = useState<number>(0);

	useEffect(() => {
		document.addEventListener('scroll', handleInfinityScroll);
		return () => document.removeEventListener('scroll', handleInfinityScroll);
	}, []);

	useLayoutEffect(() => {
		const fetchComics = async () => {
			setSearching(true);

			const { comics, errorMessage } = await ComicService.GetComics(page);

			if (!!errorMessage) {
				setSearching(false);
				alert(errorMessage);
				return;
			}

			if (comics) {
				setComicsList((prevList) => [...prevList, ...comics]);

				setSearching(false);
			}

			setSearching(false);
		};

		fetchComics();
	}, [page]);

	const handleInfinityScroll = () => {
		const scrolledToTheBottom = window.innerHeight + Math.round(window.scrollY) >= document.body.offsetHeight;

		if (scrolledToTheBottom) {
			setPage((prev) => prev + 1);
		}
	};

	const fetchComicsById = async (id: number) => {
		document.removeEventListener('scroll', handleInfinityScroll);

		const { comics, errorMessage } = await ComicService.GetComicById(id);

		if (!!errorMessage) {
			alert(errorMessage);
			return;
		}

		if (comics) {
			setComicSearched(comics);
		}
	};

	const fetchComicsBySearch = async (search: string) => {
		if (!search) return [];

		setSearching(true);

		const { comics, errorMessage } = await ComicService.GetComicsBySearch(search);

		if (!!errorMessage) {
			alert(errorMessage);
			setSearching(false);
			return [];
		}

		if (!comics) {
			setSearching(false);
			return [];
		}

		const results = comics.map((comic) => ({ label: comic.title, value: comic.id }));

		setSearching(false);
		return results;
	};

	const clearResults = async () => {
		document.addEventListener('scroll', handleInfinityScroll);
		setComicSearched([]);
	};

	return (
		<>
			<Helmet>
				<title>Comics | Marvel App</title>
			</Helmet>
			<SearchPage>
				<Button variant='icon' label='Back to Home' onClick={() => redirect('/')} />
				<Title title='Comics' />
				<SearchBar
					label='Search for a comic'
					onSearch={fetchComicsBySearch}
					onSelect={fetchComicsById}
					onClear={clearResults}
					loading={searching}
				/>
				<CardList>
					{comicSearched.length > 0
						? comicSearched.map((comic) => <Card key={comic.id} variant='comic' {...comic} />)
						: comicsList.map((comic) => <Card key={comic.id} variant='comic' {...comic} />)}
				</CardList>
				{searching ? <Loading /> : null}
			</SearchPage>
		</>
	);
};
