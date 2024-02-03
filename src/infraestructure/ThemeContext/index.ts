import { connect, ConnectedProps } from 'react-redux';
import { ThemeContext } from './ThemeContext';
import { AppOperations } from '../redux/App.operations';
import { RootState } from '../redux/store';

const mapStateToProps = (state: RootState) => ({
	isDarkTheme: state.app.isDarkTheme,
});

const mapDispatchToProps = {
	setIsDarkTheme: AppOperations.setIsDarkTheme,
};

const connector = connect(mapStateToProps, mapDispatchToProps);
export type ReduxProps = ConnectedProps<typeof connector>;
const ThemeContextConnected = connector(ThemeContext);
export { ThemeContextConnected as ThemeContext };
