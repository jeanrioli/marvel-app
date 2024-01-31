import { FC, useEffect } from 'react';
import * as Styled from './Characters.styled';

import { Link, useNavigate } from 'react-router-dom';
import { Button, Title } from '../../../../components';
import { CharacterService } from '../../services';

export const Characters: FC = () => {
	const redirect = useNavigate();

	useEffect(() => {
		const fetchCharacters = async () => {
			const response = await CharacterService.GetCharacters();

			console.log(response);
		};

		fetchCharacters();
	}, []);

	return (
		<Styled.Container>
			<Button variant='icon' label='Back to Home' onClick={() => redirect('/')} />
			<Title title='Characters' />
			<Link to={'/characters/1'} style={{ textDecoration: 'none' }}>
				<Styled.Card>
					{/* Conteúdo do card */}
					<h3>{'title'}</h3>
					<p>{'description'}</p>
					{/* Adicione mais detalhes conforme necessário */}
				</Styled.Card>
			</Link>
		</Styled.Container>
	);
};
