import { FC, HTMLAttributes, InputHTMLAttributes } from 'react';
import * as Styled from './Input.styled';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input: FC<InputProps> = ({ ...props }) => {
	return (
		<Styled.Container>
			<Styled.Input {...props} />
		</Styled.Container>
	);
};
