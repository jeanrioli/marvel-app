import styled from 'styled-components';
import { FOOTER_HEIGHT_DESKTOP, FOOTER_HEIGHT_MOBILE } from '../../../utils';

export const Container = styled.footer`
	background-color: ${({ theme }) => theme.colors.tertiary};
	color: ${({ theme }) => theme.colors.quaternary};
	height: ${FOOTER_HEIGHT_MOBILE}px;

	@media screen and (min-width: 768px) {
		height: ${FOOTER_HEIGHT_DESKTOP}px;
	}
`;
export const Content = styled.div`
	height: 100%;
	width: 100%;
	max-width: 940px;
	margin: 0 auto;
	text-align: center;
`;
