import styled from 'styled-components';

export const Container = styled.div``;

export const Return = styled.div``;

export const Title = styled.div`
	margin-top: 16px;
`;

export const Content = styled.div`
	margin-top: 24px;
	display: grid;
	grid-template-columns: repeat(1, 1fr);
	gap: 16px;

	@media screen and (min-width: 768px) {
		grid-template-columns: repeat(2, 1fr);
	}
`;

export const Thumbnail = styled.div``;

export const Description = styled.div`
	color: ${({ theme }) => theme.colors.tertiary};
`;
