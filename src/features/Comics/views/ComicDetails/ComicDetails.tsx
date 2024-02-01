import { FC, useEffect } from 'react';
import * as Styled from './ComicDetails.styled';

import { Button, Title } from '../../../../components';
import { useNavigate, useParams } from 'react-router-dom';
import { ComicService } from '../../services';

export const ComicDetails: FC = () => {
	const redirect = useNavigate();
	const { id } = useParams();

	useEffect(() => {
		const fetchCharacter = async () => {
			if (!id) return;
			const { comic } = await ComicService.GetComicById(+id);
		};

		fetchCharacter();
	}, []);

	return (
		<Styled.Container>
			<Button variant='icon' label='Back to Home' onClick={() => redirect('/')} />
			<Title title='Comic Details' />
		</Styled.Container>
	);
};
