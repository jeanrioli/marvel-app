import { FC } from 'react';
import * as Styled from './Header.styled';
import { IconMoon } from '../../../icons/IconMoon';
import { Button } from '../../atoms';
import { IconMoonFilled, IconProfile, IconProfileFilled } from '../../../icons';
import { useNavigate } from 'react-router-dom';
import { ReduxProps } from '.';

interface HeaderProps extends ReduxProps {}

export const Header: FC<HeaderProps> = ({ isAuthenticated, isDarkTheme, setIsAuthenticated, setIsDarkTheme }) => {
	const redirect = useNavigate();

	return (
		<Styled.Container>
			<Styled.Content>
				<Styled.Logo onClick={() => redirect('/')}>
					<img src='img/marvel-logo.png' alt='marvel logo' />
				</Styled.Logo>
				<Styled.Buttons>
					<Styled.ChangeTheme>
						<Button
							variant='icon'
							icon={isDarkTheme ? <IconMoonFilled /> : <IconMoon />}
							onClick={() => setIsDarkTheme(!isDarkTheme)}
							aria-label='Change color theme'
						/>
					</Styled.ChangeTheme>
					<Styled.Profile>
						<Button
							variant='icon'
							icon={isAuthenticated ? <IconProfileFilled /> : <IconProfile />}
							onClick={() => redirect('/authentication')}
							aria-label='sign up'
						/>
					</Styled.Profile>
				</Styled.Buttons>
			</Styled.Content>
		</Styled.Container>
	);
};
