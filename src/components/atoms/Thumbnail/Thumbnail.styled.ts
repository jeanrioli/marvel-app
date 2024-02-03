import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	border: solid 1px ${({ theme }) => theme.colors.tertiary};
`;

export const Image = styled.img`
	width: 100%;
	aspect-ratio: 4/5;
`;
