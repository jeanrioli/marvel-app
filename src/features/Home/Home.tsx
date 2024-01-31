import { FC } from 'react';
import * as Styled from './Home.styled';
import { ButtonPage, Title } from '../../components';
import { useNavigate } from 'react-router-dom';

export const Home: FC = () => {
	const redirect = useNavigate();

	return (
		<Styled.Container>
			<Title title='Welcome to Marvel App!' subtitle='Select one of the pages below to see the content:' />
			<Styled.Pages>
				<ButtonPage label='Characters' onClick={() => redirect('/characters')} />
				<ButtonPage label='Comics' onClick={() => redirect('/comics')} />
				<ButtonPage label='Creators' onClick={() => redirect('/creators')} />
				<ButtonPage label='Favorites' onClick={() => redirect('/favorites')} />
			</Styled.Pages>
		</Styled.Container>
	);
};
