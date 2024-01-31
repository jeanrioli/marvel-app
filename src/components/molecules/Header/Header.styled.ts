import styled from 'styled-components';
import { HEADER_HEIGHT_DESKTOP, HEADER_HEIGHT_MOBILE } from '../../../utils';

export const Container = styled.header`
	background-color: #202020;
	color: white;
	height: ${HEADER_HEIGHT_MOBILE}px;
	display: flex;
	align-items: center;
	justify-content: center;

	@media screen and (min-width: 768px) {
		height: ${HEADER_HEIGHT_DESKTOP}px;
	}
`;

export const Logo = styled.div`
	height: 100%;

	> img {
		height: 100%;
	}
`;
