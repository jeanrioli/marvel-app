import { FC, useEffect, useState } from 'react';

import { useNavigate, useParams } from 'react-router-dom';
import { Button, DetailPage, Thumbnail, Title } from '../../../../components';
import { ComicService } from '../../services';
import { Comic } from '../../../../entities';

export const ComicDetails: FC = () => {
	const redirect = useNavigate();
	const { id } = useParams();
	const [comic, setComic] = useState<Comic | null>(null);

	useEffect(() => {
		const fetchComic = async () => {
			if (!id) return;

			const { comics, errorMessage } = await ComicService.GetComicById(Number(id));

			if (errorMessage) {
				alert(errorMessage);
			}

			if (!comics || comics?.length === 0) {
				redirect('/');
				return;
			}

			setComic(comics[0]);
		};

		fetchComic();
	}, [id]);

	if (!comic) return null;

	return (
		<DetailPage>
			<Button variant='icon' label='Back to Home' onClick={() => redirect('/')} />
			<Title title={comic.title} />
			<Thumbnail src={comic.thumbnail.path + '.' + comic.thumbnail.extension} alt={comic.title} />
			<span>{!!comic.description.length ? comic.description : 'Nothing to see here!'}</span>
		</DetailPage>
	);
};
