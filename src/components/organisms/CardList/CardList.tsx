import { FC, ReactNode } from 'react';
import * as Styled from './CardList.styled';

interface CardListProps {
	children: ReactNode;
}

export const CardList: FC<CardListProps> = ({ children }) => {
	return <Styled.Container>{children}</Styled.Container>;
};
