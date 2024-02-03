import styled from 'styled-components';

export const Container = styled.button`
	cursor: pointer;
	background: none;
	border: none;
	padding: 0;
`;

export const Icon = styled.div`
	color: #f0141e;
	display: flex;
	align-items: center;
	height: 24px;
	width: 24px;
`;

export const Label = styled.div`
	font-weight: 600;
	color: #f0141e;
`;

export const ButtonText = styled.div``;

export const ButtonIcon = styled.div`
	padding: 4px;
	display: flex;
	align-items: center;
	flex-direction: row;
	gap: 4px;

	&:hover {
		${Label} {
			color: #ff6970;
		}

		${Icon} {
			color: #ff6970;
		}
	}
`;
