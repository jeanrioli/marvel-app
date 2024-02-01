import { FC } from 'react';
import * as Styled from './Card.styled';

import { Link } from 'react-router-dom';

interface CardProps {
	redirect: string;
	name: string;
}

export const Card: FC<CardProps> = ({ redirect, name }) => {
	return (
		<Link to={redirect} style={{ textDecoration: 'none' }}>
			<Styled.Container>{name}</Styled.Container>
		</Link>
	);
};
