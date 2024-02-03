import styled from 'styled-components';
import { HEADER_HEIGHT_DESKTOP, HEADER_HEIGHT_MOBILE } from '../../../utils';

export const Container = styled.header`
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

export const Content = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	max-width: 940px;
`;

export const Logo = styled.div`
	cursor: pointer;
	height: 100%;

	> img {
		height: 100%;
	}
`;

export const Buttons = styled.div`
	padding: 8px;
	box-sizing: border-box;
	position: absolute;
	display: flex;
	gap: 8px;
	right: 0;

	@media screen and (min-width: 768px) {
		gap: 16px;
		padding: 16px;
	}
`;

export const ChangeTheme = styled.div``;

export const Profile = styled.div``;
