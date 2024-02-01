import { FC, useEffect } from 'react';
import * as Styled from './Comics.styled';

import { Button, Title } from '../../../../components';
import { useNavigate } from 'react-router-dom';
import { ComicService } from '../../services';

export const Comics: FC = () => {
	const redirect = useNavigate();

	useEffect(() => {
		const fetchComics = async () => {
			const { comics } = await ComicService.GetComics();
		};

		fetchComics();
	}, []);

	return (
		<Styled.Container>
			<Button variant='icon' label='Back to Home' onClick={() => redirect('/')} />
			<Title title='Comics' />
		</Styled.Container>
	);
};
