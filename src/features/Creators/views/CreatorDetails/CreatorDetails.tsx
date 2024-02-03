import { FC, useEffect, useState } from 'react';

import { useNavigate, useParams } from 'react-router-dom';
import { Button, DetailPage, Thumbnail, Title } from '../../../../components';
import { CreatorService } from '../../services';
import { Creator } from '../../../../entities';

export const CreatorDetails: FC = () => {
	const redirect = useNavigate();
	const { id } = useParams();
	const [creator, setCreator] = useState<Creator | null>(null);

	useEffect(() => {
		const fetchCreator = async () => {
			if (!id) return;

			const { creators, errorMessage } = await CreatorService.GetCreatorById(Number(id));

			if (errorMessage) {
				alert(errorMessage);
			}

			if (!creators || creators?.length === 0) {
				redirect('/');
				return;
			}

			setCreator(creators[0]);
		};

		fetchCreator();
	}, [id]);

	if (!creator) return null;

	return (
		<DetailPage>
			<Button variant='icon' label='Back to Home' onClick={() => redirect('/')} />
			<Title title={creator.fullName} />
			<Thumbnail src={creator.thumbnail.path + '.' + creator.thumbnail.extension} alt={creator.fullName} />
			<span>{'Nothing to see here!'}</span>
		</DetailPage>
	);
};
