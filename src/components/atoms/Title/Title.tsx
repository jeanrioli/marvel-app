import { FC } from 'react';
import * as Styled from './Title.styled';

interface TitleProps {
	title: string;
	subtitle?: string;
}

export const Title: FC<TitleProps> = ({ title, subtitle }) => {
	return (
		<Styled.Container>
			<Styled.Title>{title}</Styled.Title>
			<Styled.Subtitle>{subtitle}</Styled.Subtitle>
		</Styled.Container>
	);
};
