import { FC } from 'react';
import * as Styled from './Card.styled';

import { Link, useNavigate } from 'react-router-dom';
import { Character, Comic, Creator } from '../../../entities';

type CardProps = CharacterProps | CreatorProps | ComicProps;

interface CharacterProps extends Character {
	variant: 'character';
}

interface CreatorProps extends Creator {
	variant: 'creator';
}

interface ComicProps extends Comic {
	variant: 'comic';
}

export const Card: FC<CardProps> = (props) => {
	const redirect = useNavigate();

	if (props.variant === 'character') {
		return (
			<Styled.Container key={props.id} onClick={() => redirect(`/characters/${props.id}`)}>
				<Styled.Thumbnail src={`${props.thumbnail.path}.${props.thumbnail.extension}`} alt={props.name} />
				<Styled.Name>{props.name}</Styled.Name>
			</Styled.Container>
		);
	}

	if (props.variant === 'creator') {
		return (
			<Styled.Container key={props.id} onClick={() => redirect(`/characters/${props.id}`)}>
				<Styled.Thumbnail src={`${props.thumbnail.path}.${props.thumbnail.extension}`} alt={props.fullName} />
				<Styled.Name>{props.fullName}</Styled.Name>
			</Styled.Container>
		);
	}

	if (props.variant === 'comic') {
		return (
			<Styled.Container key={props.id} onClick={() => redirect(`/characters/${props.id}`)}>
				<Styled.Thumbnail src={`${props.thumbnail.path}.${props.thumbnail.extension}`} alt={props.title} />
				<Styled.Name>{props.title}</Styled.Name>
			</Styled.Container>
		);
	}

	return null;
};
