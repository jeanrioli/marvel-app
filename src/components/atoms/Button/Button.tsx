import { FC, ButtonHTMLAttributes } from 'react';
import * as Styled from './Button.styled';
import { IconArrowBack } from '../../../icons';

type ButtonProps = ButtonText | ButtonIcon;

interface ButtonText extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant: 'text';
	label: string;
}

interface ButtonIcon extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant: 'icon';
	label?: string;
	icon?: JSX.Element;
}

export const Button: FC<ButtonProps> = (props) => {
	if (props.variant === 'text') {
		return (
			<Styled.Container onClick={props.onClick}>
				<Styled.ButtonText>
					<Styled.Label>{props.label}</Styled.Label>
				</Styled.ButtonText>
			</Styled.Container>
		);
	}

	if (props.variant === 'icon') {
		return (
			<Styled.Container onClick={props.onClick}>
				<Styled.ButtonIcon>
					<Styled.Icon>{props.icon ?? <IconArrowBack />}</Styled.Icon>
					<Styled.Label>{props.label}</Styled.Label>
				</Styled.ButtonIcon>
			</Styled.Container>
		);
	}

	return null;
};
