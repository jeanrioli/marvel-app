import styled from 'styled-components';

export const Container = styled.div``;

export const Title = styled.div`
	font-size: 24px;
	text-transform: uppercase;
	color: ${({ theme }) => theme.colors.tertiary};

	@media screen and (min-width: 769px) {
		font-size: 36px;
	}
`;

export const Subtitle = styled.div`
	margin-top: 16px;
	color: ${({ theme }) => theme.colors.tertiary};
`;
