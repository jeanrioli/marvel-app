import styled from 'styled-components';

export const Container = styled.div``;

export const Dropdown = styled.div`
	position: relative;
	z-index: 1;
`;

export const SuggestionsList = styled.ul`
	width: 100%;
	position: absolute;
	list-style: none;
	padding: 0;
	top: 4px;
	background-color: #fff;
	border: solid 1px #aaa;
`;

export const SuggestionItem = styled.li`
	cursor: pointer;
	padding: 4px;

	&:hover {
		background-color: yellow;
	}
`;
