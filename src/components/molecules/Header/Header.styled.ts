import styled from 'styled-components';
import { HEADER_HEIGHT_DESKTOP, HEADER_HEIGHT_MOBILE } from '../../../utils';

export const Container = styled.header`
	position: relative;
	background-color: ${({ theme }) => theme.colors.tertiary};
	height: ${HEADER_HEIGHT_MOBILE}px;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 99;

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

export const Buttons = styled.div`
	position: absolute;
	display: flex;
	gap: 8px;
	right: 0;
`;

export const ChangeTheme = styled.div``;

export const Profile = styled.div``;
