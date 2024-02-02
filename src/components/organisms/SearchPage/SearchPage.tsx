import { FC, ReactNode, Children } from 'react';
import * as Styled from './SearchPage.styled';

interface SearchPageProps {
	children: ReactNode;
}

export const SearchPage: FC<SearchPageProps> = ({ children }) => {
	const content = Children.toArray(children);

	return (
		<Styled.Container>
			<Styled.Return>{content[0]}</Styled.Return>
			<Styled.Title>{content[1]}</Styled.Title>
			<Styled.SearchBar>{content[2]}</Styled.SearchBar>
			<Styled.Content>{content[3]}</Styled.Content>
		</Styled.Container>
	);
};
