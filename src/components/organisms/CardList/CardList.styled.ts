import styled from 'styled-components';

export const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 16px;

	@media screen and (min-width: 500px) {
		grid-gap: 16px;
		grid-template-columns: repeat(3, 1fr);
	}

	@media screen and (min-width: 700px) {
		grid-gap: 16px;
		grid-template-columns: repeat(4, 1fr);
	}

	@media screen and (min-width: 960px) {
		grid-gap: 24px;
		grid-template-columns: repeat(5, 1fr);
	}
`;
