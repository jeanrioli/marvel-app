import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	cursor: pointer;
	background-color: #202020;
	transition: 0.3s;
	overflow: hidden;
	box-shadow: 0px 0px 15px -5px rgba(0, 0, 0, 0.5);

	&:hover {
		scale: 1.05;
		box-shadow: 0px 0px 20px -5px rgba(0, 0, 0, 0.5);
	}
`;

export const Thumbnail = styled.img`
	width: 100%;

	aspect-ratio: 4/5;
`;

export const Name = styled.div`
	color: #fff;
	text-transform: uppercase;

	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
	text-align: left;

	overflow: hidden;
	text-overflow: ellipsis;
	white-space: initial;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
`;
