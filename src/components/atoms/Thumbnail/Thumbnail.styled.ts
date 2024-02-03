import styled from 'styled-components';

export const Image = styled.img`
	border: solid 1px ${({ theme }) => theme.colors.tertiary};
	width: 100%;
	aspect-ratio: 4/5;
`;
