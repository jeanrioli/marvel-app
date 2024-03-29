import { connect, ConnectedProps } from 'react-redux';
import { Header } from './Header';
import { AppOperations } from '../../../infraestructure/redux/App.operations';
import { RootState } from '../../../infraestructure/redux/store';

const mapStateToProps = (state: RootState) => ({
	isAuthenticated: state.app.isAuthenticated,
	isDarkTheme: state.app.isDarkTheme,
});

const mapDispatchToProps = {
	setIsAuthenticated: AppOperations.setIsAuthenticated,
	setIsDarkTheme: AppOperations.setIsDarkTheme,
};

const connector = connect(mapStateToProps, mapDispatchToProps);
export type ReduxProps = ConnectedProps<typeof connector>;
const HeaderConnected = connector(Header);
export { HeaderConnected as Header };
