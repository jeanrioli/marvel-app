import styled from 'styled-components';

export const Container = styled.button`
	cursor: pointer;
	padding: 8px;
	background-color: ${({ theme }) => theme.colors.primary};
	color: ${({ theme }) => theme.colors.secondary};
	text-transform: uppercase;
	font-size: 24px;
	border: 1px solid ${({ theme }) => theme.colors.primary};
	width: 100%;
	max-width: 300px;

	&:hover {
		background-color: ${({ theme }) => theme.colors.quaternary};
		color: ${({ theme }) => theme.colors.primary};
		border: 1px solid ${({ theme }) => theme.colors.primary};
	}

	@media screen and (min-width: 768px) {
		font-size: 36px;
	}
`;
