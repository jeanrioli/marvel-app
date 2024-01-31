import { FC, HTMLAttributes } from 'react';
import * as Styled from './ButtonPage.styled';

interface ButtonPageProps extends HTMLAttributes<HTMLButtonElement> {
	label: string;
}

export const ButtonPage: FC<ButtonPageProps> = ({ label, onClick }) => {
	return <Styled.Container onClick={onClick}>{label}</Styled.Container>;
};
