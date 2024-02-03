import { FC, ReactNode, Children } from 'react';
import * as Styled from './DetailPage.styled';

interface DetailPageProps {
	children: ReactNode;
}

export const DetailPage: FC<DetailPageProps> = ({ children }) => {
	const content = Children.toArray(children);

	return (
		<Styled.Container>
			<Styled.Return>{content[0]}</Styled.Return>
			<Styled.Title>{content[1]}</Styled.Title>
			<Styled.Content>
				<Styled.Thumbnail>{content[2]}</Styled.Thumbnail>
				<Styled.Description>{content[3]}</Styled.Description>
			</Styled.Content>
		</Styled.Container>
	);
};
