import { FC, useContext } from 'react';
import * as Styled from './Header.styled';
import { AppContext } from '../../../infraestructure';
import { IconMoon } from '../../../icons/IconMoon';
import { Button } from '../../atoms';
import { IconMoonFilled, IconProfile, IconProfileFilled } from '../../../icons';
import { useNavigate } from 'react-router-dom';

export const Header: FC = () => {
	const redirect = useNavigate();
	const { isDarkTheme, isAuthenticated, setIsDarkTheme } = useContext(AppContext);

	return (
		<Styled.Container>
			<Styled.Logo>
				<img src='img/marvel-logo.png' alt='marvel app logo' />
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
						aria-label='Change color theme'
					/>
				</Styled.Profile>
			</Styled.Buttons>
		</Styled.Container>
	);
};
