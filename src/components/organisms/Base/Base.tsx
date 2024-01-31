import { FC, ReactNode } from 'react';
import * as Styled from './Base.styled';

interface BaseProps {
	children: ReactNode;
}

export const Base: FC<BaseProps> = ({ children }) => {
	return (
		<Styled.Container>
			<Styled.Content>{children}</Styled.Content>
		</Styled.Container>
	);
};
