import { FC } from 'react';
import * as Styled from './Header.styled';

export const Header: FC = () => {
	return (
		<Styled.Container>
			<Styled.Logo>
				<img src='img/marvel-logo.png' alt='marvel app logo' />
			</Styled.Logo>
		</Styled.Container>
	);
};
