import { FC, InputHTMLAttributes } from 'react';
import * as Styled from './Input.styled';
import { IconClose } from '../../../icons';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	label: string;
	onClickIcon: () => void;
}

export const Input: FC<InputProps> = ({ label, onClickIcon, ...props }) => {
	return (
		<Styled.Fieldset>
			<Styled.Legend>{label}</Styled.Legend>
			<Styled.InputContainer>
				<Styled.Input {...props} />
				{props.value ? (
					<Styled.Icon onClick={onClickIcon}>
						<div>
							<IconClose />
						</div>
					</Styled.Icon>
				) : null}
			</Styled.InputContainer>
		</Styled.Fieldset>
	);
};
