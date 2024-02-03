import styled from 'styled-components';
import {
	FOOTER_HEIGHT_MOBILE,
	HEADER_HEIGHT_MOBILE,
	HEADER_HEIGHT_DESKTOP,
	FOOTER_HEIGHT_DESKTOP,
} from '../../../utils';

export const Container = styled.div`
	min-height: calc(100vh - ${HEADER_HEIGHT_MOBILE}px - ${FOOTER_HEIGHT_MOBILE}px);
	background-color: ${({ theme }) => theme.colors.quaternary};

	@media screen and (min-width: 768px) {
		min-height: calc(100vh - ${HEADER_HEIGHT_DESKTOP}px - ${FOOTER_HEIGHT_DESKTOP}px);
	}
`;

export const Content = styled.div`
	min-height: calc(100vh - ${HEADER_HEIGHT_MOBILE}px - ${FOOTER_HEIGHT_MOBILE}px);
	max-width: 960px;
	padding: 24px;
	box-sizing: border-box;
	margin: 0 auto;
	background-color: ${({ theme }) => theme.colors.quaternary};
	box-shadow: 0px 0px 20px -5px rgba(0, 0, 0, 0.5);

	@media screen and (min-width: 768px) {
		padding: 32px;
		min-height: calc(100vh - ${HEADER_HEIGHT_DESKTOP}px - ${FOOTER_HEIGHT_DESKTOP}px);
	}
`;
