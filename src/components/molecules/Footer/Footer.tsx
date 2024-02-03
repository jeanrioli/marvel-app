import { FC } from 'react';
import * as Styled from './Footer.styled';
import { FOOTER_COPYRIGHT } from '../../../utils';

export const Footer: FC = () => {
	return (
		<Styled.Container>
			<Styled.Content>{FOOTER_COPYRIGHT}</Styled.Content>
		</Styled.Container>
	);
};
