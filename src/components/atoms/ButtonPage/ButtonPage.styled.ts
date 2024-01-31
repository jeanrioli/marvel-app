import styled from 'styled-components';

export const Container = styled.button`
	cursor: pointer;
	padding: 8px;
	border: none;
	background-color: #f0141e;
	color: #fff;
	text-transform: uppercase;
	font-size: 24px;
	border: 1px solid #f0141e;
	width: 100%;
	max-width: 300px;

	&:hover {
		background-color: #fff;
		color: #f0141e;
		border: 1px solid #f0141e;
	}

	@media screen and (min-width: 768px) {
		font-size: 36px;
	}
`;
