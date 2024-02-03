import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	display: flex;
`;

export const Fieldset = styled.fieldset`
	flex: 1;
	border: solid 1px ${({ theme }) => theme.colors.tertiary};
`;

export const Legend = styled.legend`
	color: ${({ theme }) => theme.colors.tertiary};
`;

export const Input = styled.input`
	all: unset;
	flex: 1;
	color: ${({ theme }) => theme.colors.primary};
`;

export const InputContainer = styled.span`
	display: flex;
`;

export const Icon = styled.button`
	color: ${({ theme }) => theme.colors.tertiary};
	width: 12px;
	height: 12px;
	cursor: pointer;
	background: none;
	padding: 0;
	border: none;
`;
